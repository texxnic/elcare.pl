"use client";

import Button from "../button";

export default function ScrollButton() {
  const handleClick = () => {
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="lg" variant="primary_accent" onClick={handleClick}>
      Gotowi na zmiany?
    </Button>
  );
}
