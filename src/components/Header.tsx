"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to generate correct href for section links
  // If on homepage, use hash link. Otherwise, navigate to homepage with hash
  const getSectionHref = (sectionId: string) => {
    return pathname === "/" ? `#${sectionId}` : `/#${sectionId}`;
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setGuideDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setGuideDropdownOpen(false);
    }, 150); // Small delay to prevent accidental closing
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-sticky transition-all duration-300 bg-gradient-to-b from-elcare-cream/100 to-elcare-cream/60 backdrop-blur">
      <div className="container mx-auto container-x-padding py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-baloo font-semibold text-4xl text-elcare-purple"
          >
            <span className="text-elcare-purple-300">el</span>care
          </Link>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link
            href={getSectionHref("home")}
            className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
          >
            Strona główna
          </Link>
          <Link
            href={getSectionHref("about")}
            className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
          >
            O mnie
          </Link>
          <Link
            href={getSectionHref("offer")}
            className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
          >
            Oferta
          </Link>
          <Link
            href={getSectionHref("pricing")}
            className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
          >
            Cennik
          </Link>
          {/* Przewodnik snu Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition flex justify-between items-center gap-1">
              Przewodnik snu
              <svg
                className={`w-4 h-4 transition-transform ${
                  guideDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {guideDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/kalendarz"
                  className="block px-4 py-3 text-elcare-purple-600 hover:text-elcare-purple-500 hover:bg-elcare-purple-50 transition"
                >
                  Kalendarz skoków rozwojowych i kryzysów
                </Link>
              </div>
            )}
          </div>
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
          <nav className="absolute top-full right-4 mt-2 w-56 bg-white rounded-lg shadow-lg flex flex-col py-2 z-50 md:hidden animate-fade-in">
            <Link
              href={getSectionHref("home")}
              className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              href={getSectionHref("about")}
              className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              O mnie
            </Link>
            <Link
              href={getSectionHref("offer")}
              className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Oferta
            </Link>
            <Link
              href={getSectionHref("pricing")}
              className="px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Cennik
            </Link>
            {/* Mobile Przewodnik snu Dropdown */}
            <div className="relative">
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-elcare-purple-600 hover:text-elcare-purple-500 transition text-left flex items-center justify-between"
                onClick={() => setGuideDropdownOpen(!guideDropdownOpen)}
              >
                Przewodnik snu
                <svg
                  className={`w-4 h-4 transition-transform ${
                    guideDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {guideDropdownOpen && (
                <div className="bg-elcare-purple-50">
                  <Link
                    href="/kalendarz"
                    className="block px-6 py-3 pl-8 text-elcare-purple-600 hover:text-elcare-purple-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Kalendarz skoków rozwojowych i kryzysów
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
