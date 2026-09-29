"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useLanguage();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f5f3]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Main Navbar */}
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center text-[1.45rem] font-black tracking-[-0.07em]"
          >
            NEXORA
            <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-black transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {t.home}
            </Link>

            <Link
              href="/#topics"
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {t.topics}
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {t.about}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Search */}
            <Link
              href="/search"
              className="hidden rounded-full border border-black/15 bg-white/50 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white sm:block"
            >
              {t.search}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 transition-all hover:bg-black hover:text-white md:hidden"
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute left-0 top-1 block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-2.5 block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 top-4 block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[420px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-black/10 bg-white/70 p-3 shadow-sm">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              {t.home}
              <span>→</span>
            </Link>

            <Link
              href="/#topics"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              {t.topics}
              <span>→</span>
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              {t.about}
              <span>→</span>
            </Link>

            <Link
              href="/search"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-between rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t.search}
              <span>⌕</span>
            </Link>

            {/* Mobile Language */}
            <div className="mt-3 border-t border-black/10 pt-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
