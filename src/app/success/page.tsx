"use client";

import { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti from the top
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: 0 },
        gravity: 1.5,
        scalar: 1.2,
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative">
      {/* White panel with shadow */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-2xl w-full relative z-10">
        <h1 className="text-4xl md:text-5xl font-baloo text-elcare-purple mb-6">
          Gratulacje!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Dziękujemy za zakup! Twoja sesja konsultacyjna została potwierdzona.
          Wkrótce otrzymasz email z dalszymi instrukcjami.
        </p>
        <Link
          href="/"
          className="bg-elcare-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all elcare-shadow inline-block"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
