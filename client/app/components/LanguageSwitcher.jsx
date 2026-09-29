"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-black/10 bg-white p-1 text-xs font-semibold">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 transition-all ${
          language === "en"
            ? "bg-black text-white"
            : "text-black/50 hover:text-black"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("gu")}
        className={`rounded-full px-3 py-1.5 transition-all ${
          language === "gu"
            ? "bg-black text-white"
            : "text-black/50 hover:text-black"
        }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
};

export default LanguageSwitcher;
