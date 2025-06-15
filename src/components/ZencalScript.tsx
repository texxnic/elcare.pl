"use client";

import { useEffect } from "react";

const ZencalScript = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="zencal.io/js/embed.js"]')) {
      return;
    }

    // Load the Zencal script
    const script = document.createElement("script");
    script.src = "https://app.zencal.io/js/embed.js?v=3.8.1";
    script.async = true;
    script.setAttribute("data-cookieconsent", "ignore");
    document.body.appendChild(script);

    return () => {
      // Only remove if we added it
      const addedScript = document.querySelector(
        'script[src*="zencal.io/js/embed.js"]'
      );
      if (addedScript) {
        document.body.removeChild(addedScript);
      }
    };
  }, []);

  return null;
};

export default ZencalScript;
