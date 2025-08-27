"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ClarityScript() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      const consent =
        typeof window !== "undefined" &&
        localStorage.getItem("cookie-consent") === "true";
      if (consent) setConsented(true);

      const handleStorage = (e: StorageEvent) => {
        if (e.key === "cookie-consent" && e.newValue === "true") {
          setConsented(true);
        }
      };

      const handleCustom = () => setConsented(true);

      window.addEventListener("storage", handleStorage);
      window.addEventListener(
        "cookie-consent-accepted",
        handleCustom as EventListener
      );

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(
          "cookie-consent-accepted",
          handleCustom as EventListener
        );
      };
    } catch {}
  }, []);

  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (!consented || !clarityId) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">{`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `}</Script>
  );
}
