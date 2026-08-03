"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-sm sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          Lateef Jawando
        </Link>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/books"
                style={{ color: "transparent", fontSize: "0.875rem" }}
              >
                Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200">
          <ul className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/books"
                style={{ color: "transparent", fontSize: "0.875rem" }}
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Books
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
