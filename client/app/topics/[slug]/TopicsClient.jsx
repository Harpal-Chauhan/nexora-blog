"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import React from "react";

const TopicsClient = ({ category, articles }) => {
  const { language, t } = useLanguage();

  const isGujarati = language === "gu";

  const categoryName = isGujarati
    ? t.categories?.[category.name] || category.name
    : category.name;
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <Navbar />

      {/* Topic Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black/30" />

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                  {isGujarati ? "વિષય" : "Topic"} / {category.slug}
                </p>
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                {categoryName}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
                {isGujarati
                  ? `${categoryName} વિશેના નવીનતમ લેખો, વિચારો અને માહિતી અહીં વાંચો.`
                  : `Explore the latest stories, ideas and insights about ${category.name}.`}
              </p>
            </div>

            {/* Article Count */}
            <div className="shrink-0 lg:pb-2">
              <div className="rounded-[1.5rem] border border-black/10 bg-white px-6 py-5">
                <p className="text-3xl font-black tracking-[-0.05em]">
                  {articles.length}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                  {articles.length === 1
                    ? isGujarati
                      ? "લેખ"
                      : "Article"
                    : isGujarati
                      ? "લેખો"
                      : "Articles"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-5 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
              {isGujarati ? "એક્સપ્લોર" : "Explore"}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              {isGujarati
                ? `${categoryName} માં નવીનતમ`
                : `Latest in ${category.name}`}
            </h2>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center text-sm font-semibold text-black/45 transition-colors hover:text-black"
          >
            ← {isGujarati ? "હોમ પર પાછા જાઓ" : "Back home"}
          </Link>
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const title = isGujarati
                ? article.titleGujarati || article.title
                : article.title;

              const description = isGujarati
                ? article.descriptionGujarati || article.description
                : article.description;

              const articleCategory = isGujarati
                ? article.categoryNameGujarati ||
                  t.categories?.[category.name] ||
                  category.name
                : category.name;

              return (
                <Link
                  key={article.documentId}
                  href={`/articles/${article.documentId}`}
                  className="group"
                >
                  <article>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black/5">
                      {article.coverImage ? (
                        <img
                          src={`http://localhost:1337${article.coverImage.url}`}
                          alt={article.coverImage.alternativeText || title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/25">
                            NEXORA
                          </span>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-lg opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        →
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                          {articleCategory}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30">
                          NEXORA
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] transition-opacity duration-300 group-hover:opacity-55">
                        {title}
                      </h3>

                      {description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
                          {description}
                        </p>
                      )}

                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                        {isGujarati ? "લેખ વાંચો" : "Read article"}

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-[2rem] border border-black/10 bg-white px-6 py-20 text-center sm:py-28">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f3]">
              <span className="text-xl text-black/35">—</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">
              {isGujarati ? "હજુ કોઈ લેખ નથી" : "No articles yet"}
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/45">
              {isGujarati
                ? `હાલમાં ${categoryName} વિષયમાં કોઈ published લેખ નથી. નવા લેખો માટે ફરીથી તપાસો.`
                : `There are no published articles in the ${category.name} topic right now. Check back soon for new stories.`}
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              {isGujarati ? "બધા લેખો જુઓ" : "Explore all articles"}
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default TopicsClient;
