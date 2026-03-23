"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, Globe } from "lucide-react";

const navLinks = [
  { label: "Hiking", href: "/category/hiking" },
  { label: "Family Travel", href: "/category/family-travel" },
  { label: "Budget Travel", href: "/category/budget-travel" },
  { label: "Destinations", href: "/category/destinations" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-white py-1.5 px-4 text-center text-xs tracking-widest uppercase font-medium">
        The World Is Calling — Are You Ready?
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Globe className="w-6 h-6 text-amber" />
            <div>
              <span
                className="text-2xl font-bold text-navy leading-none block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Wanderlust
              </span>
              <span className="text-xs text-warm-gray tracking-widest uppercase leading-none">
                Magazine
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  pathname.startsWith(link.href)
                    ? "text-amber bg-amber/10"
                    : "text-gray-700 hover:text-navy hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname.startsWith(link.href)
                      ? "text-amber bg-amber/10"
                      : "text-gray-700 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/search"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search Articles
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
