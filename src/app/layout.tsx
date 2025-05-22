"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc]`}
      >
        {/* Top Navbar */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-b from-white/90 to-white/60 shadow-lg backdrop-blur"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between py-4 relative">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                B
              </div>
              <span className="font-bold text-xl text-gray-800">BabySleep</span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              <Link
                href="#home"
                className="text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
              >
                About
              </Link>
              <Link
                href="#offer"
                className="text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
              >
                What I Offer
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
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
                className={`block w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-gray-800 rounded my-1 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <nav className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-lg flex flex-col py-2 z-50 md:hidden animate-fade-in">
                <Link
                  href="#home"
                  className="px-6 py-3 text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="px-6 py-3 text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#offer"
                  className="px-6 py-3 text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  What I Offer
                </Link>
                <Link
                  href="#pricing"
                  className="px-6 py-3 text-lg font-semibold text-gray-800 hover:text-purple-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>
            )}
          </div>
        </header>
        {/* Main Content */}
        <main className="min-h-screen">
          <div className="container mx-auto px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
