"use client"

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const {t} = useLanguage()
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20 lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-[-0.06em] transition-opacity hover:opacity-70"
            >
              NEXORA
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45 sm:text-base">
              {t.footerDescription}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                {t.modernTech}
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
              {t.explore}
            </p>

            <nav className="mt-5 flex flex-col items-start gap-4">
              <Link
                href="/"
                className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span>{t.home}</span>
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>

              <Link
                href="/#topics"
                className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span>{t.topics}</span>
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span>{t.about}</span>
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </nav>
          </div>

          {/* Identity */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
              NEXORA / 2026
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45 sm:text-base">
              {t.footerIdentify}
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 NEXORA. {t.allRightReserved}.</span>

          <div className="flex items-center gap-3">
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>{t.builtForFuture}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
