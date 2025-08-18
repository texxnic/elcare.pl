"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    if (typeof window !== "undefined") {
      try {
        window.dispatchEvent(new Event("cookie-consent-accepted"));
      } catch {}
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-elcare-purple-200 p-4 z-50">
      <div className="container mx-auto container-x-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-elcare-purple-600 text-sm">
            <p>
              Używamy plików cookie i podobnych technologii, aby zapewnić
              najlepsze doświadczenia na naszej stronie. Szczegóły znajdziesz w
              naszej{" "}
              <a
                href="/polityka-prywatnosci"
                className="text-elcare-purple-500 hover:text-elcare-purple-400 underline"
              >
                Polityce Prywatności
              </a>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={acceptCookies}
              className="bg-elcare-purple-600 text-white px-6 py-2 rounded-lg hover:bg-elcare-purple-500 transition-colors"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
