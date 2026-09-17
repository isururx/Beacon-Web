"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-[#071A33] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          COLOMBO BEACON
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-blue-300">
            Home
          </Link>

          <Link href="/events" className="transition hover:text-blue-300">
            Events
          </Link>

          <Link href="/articles" className="transition hover:text-blue-300">
            Articles
          </Link>

          <Link href="/history" className="transition hover:text-blue-300">
            History
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-5 pt-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>

            <Link
              href="/articles"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>

            <Link
              href="/history"
              onClick={() => setIsOpen(false)}
            >
              History
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}