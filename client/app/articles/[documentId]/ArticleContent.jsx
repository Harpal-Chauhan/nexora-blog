"use client"

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import React from "react";

const ArticleContent = ({ article }) => {
  const { language, t } = useLanguage();

  const isGujarati = language === "gu";

  const title = isGujarati
    ? article.titleGujarati || article.title
    : article.title;

  const description = isGujarati
    ? article.descriptionGujarati || article.description
    : article.description;

  const content = isGujarati
    ? article.contentGujarati || article.content
    : article.content;

  const categoryName = isGujarati
    ? article.categoryNameGujarati || article.category?.name
    : article.category?.name;

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <Navbar />

      {/* Article Header */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
            NEXORA
          </span>

          {categoryName && (
            <>
              <span className="text-black/20">•</span>

              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/55">
                {categoryName}
              </span>
            </>
          )}
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8 lg:text-xl">
            {description}
          </p>
        )}

        {article.publishedDate && (
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-black/40">
            <span>
              {isGujarati ? "પ્રકાશિત" : "Published"}{" "}
              {new Date(article.publishedDate).toLocaleDateString(
                isGujarati ? "gu-IN" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </span>

            <span className="text-black/20">•</span>

            <span>NEXORA Editorial</span>
          </div>
        )}
      </section>

      {/* Cover Image */}
      {article.coverImage && (
        <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-black/5 sm:rounded-[2rem]">
            <img
              src={`http://localhost:1337${article.coverImage.url}`}
              alt={
                article.coverImage.alternativeText || title || "NEXORA Article"
              }
              className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px] md:h-[500px] lg:h-[620px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="space-y-7 text-[17px] leading-8 text-black/75 sm:text-lg sm:leading-9">
          {content?.map((block, index) => {
            const text =
              block.children?.map((child) => child.text || "").join("") || "";

            if (!text.trim()) return null;

            return (
              <p
                key={index}
                className="first-letter:text-3xl first-letter:font-bold"
              >
                {text}
              </p>
            );
          })}
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                NEXORA
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-black/45">
                {t.footerDescription}
              </p>
            </div>

            <Link
              href="/#topics"
              className="inline-flex w-fit items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80"
            >
              {isGujarati ? "વિષયો જુઓ →" : "Explore topics →"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArticleContent;
