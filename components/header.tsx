"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
      id="navbar"
    >
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-display font-bold text-white">AZU</div>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/mystory"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              My Story
            </Link>
            <Link
              href="/music"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Music
            </Link>

            <Link
              href="/merch"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Merch
            </Link>
            <Link
              href="/news"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/books"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Books
            </Link>

            <Link
              href="/newsletter"
              className="text-white hover:text-azu-amber transition-colors duration-200"
            >
              Newsletter
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-azu-amber p-2 rounded-md"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-90 rounded-lg">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/mystory"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              My Story
            </Link>
            <Link
              href="/music"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Music
            </Link>

            <Link
              href="/merch"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Merch
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="/books"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Books
            </Link>

            <Link
              href="/newsletter"
              className="block px-3 py-2 text-white hover:text-azu-amber transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
