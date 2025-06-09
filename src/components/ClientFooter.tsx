"use client";

import { useState, useEffect } from "react";
import Footer from "./Footer";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA not initialized");
      }

      // Execute reCAPTCHA
      const token = await executeRecaptcha("newsletter_subscribe");

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setMessage("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to subscribe to newsletter"
      );
    }
  };

  return (
    <Footer
      email={email}
      onEmailChange={(e) => setEmail(e.target.value)}
      onSubmit={handleSubmit}
      status={status}
      message={message}
    />
  );
}

export default function ClientFooter() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has consented to cookies
    const consent = localStorage.getItem("cookie-consent");
    setHasConsent(consent === "true");

    // Listen for changes in cookie consent
    const handleStorageChange = () => {
      const newConsent = localStorage.getItem("cookie-consent");
      setHasConsent(newConsent === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!hasConsent) {
    return (
      <Footer
        email=""
        onEmailChange={() => {}}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Proszę najpierw zaakceptować pliki cookie.");
        }}
        status="idle"
        message=""
      />
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <NewsletterForm />
    </GoogleReCaptchaProvider>
  );
}
