"use client";

import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add scroll state for header background
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change or scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close);
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  return (
    <html lang="en">
      <body
        className={` ${nunito.variable} ${baloo2.variable} font-nunito antialiased bg-elcare-cream`}
      >
        {/* Top Navbar */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-b from-elcare-cream/100 to-elcare-cream/60 backdrop-blur`}
        >
          <div className="container mx-auto container-x-padding py-4 flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <span className="font-baloo font-semibold text-4xl text-elcare-purple">
                <span className="text-elcare-purple-300">el</span>care
              </span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              <Link
                href="#home"
                className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              >
                About
              </Link>
              <Link
                href="#offer"
                className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              >
                What I Offer
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              >
                Pricing
              </Link>
            </nav>
            {/* Hamburger Icon */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`block w-7 h-1 bg-elcare-purple-600 rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-elcare-purple-600 rounded my-1 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-elcare-purple-600 rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <nav className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-lg flex flex-col py-2 z-50 md:hidden animate-fade-in">
                <Link
                  href="#home"
                  className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#offer"
                  className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  What I Offer
                </Link>
                <Link
                  href="#pricing"
                  className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>
            )}
          </div>
        </header>
        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
