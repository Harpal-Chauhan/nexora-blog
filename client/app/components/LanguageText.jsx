"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageText = ({ en, gu }) => {
  const { language } = useLanguage();
  return language === "gu" ? gu : en;
};

export default LanguageText;
