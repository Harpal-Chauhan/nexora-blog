"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const SearchPage = () => {
  const { language, t } = useLanguage();

  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const isGujarati = language === "gu";

  useEffect(() => {
    const searchArticles = async () => {
      if (!query.trim()) {
        setArticles([]);
        return;
      }

      setLoading(true);

      try {
        const searchValue = encodeURIComponent(query.trim());

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?filters[$or][0][title][$containsi]=${searchValue}&filters[$or][1][description][$containsi]=${searchValue}&filters[$or][2][titleGujarati][$containsi]=${searchValue}&filters[$or][3][descriptionGujarati][$containsi]=${searchValue}&populate=*`,
        );

        const result = await response.json();

        setArticles(result.data || []);
      } catch (error) {
        console.error("Search error:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(searchArticles, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <Navbar />

      {/* Search Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black/30" />

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/45">
                NEXORA / {t.searchPage.label}
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              {t.searchPage.title}
              <br />
              <span className="text-black/30">
                {t.searchPage.titleHighlight}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
              {t.searchPage.description}
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-10 max-w-4xl sm:mt-12">
            <div className="group relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPage.placeholder}
                className="w-full rounded-[1.25rem] border border-black/10 bg-white px-5 py-5 pr-14 text-base shadow-sm outline-none transition-all placeholder:text-black/30 focus:border-black/25 focus:shadow-lg sm:rounded-[1.5rem] sm:px-7 sm:py-6 sm:text-lg"
              />

              <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 sm:right-7">
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/15 border-t-black" />
                ) : (
                  <span className="text-xl text-black/35">⌕</span>
                )}
              </div>
            </div>

            {!query.trim() && (
              <p className="mt-4 text-xs text-black/35 sm:text-sm">
                {t.searchPage.hint}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        {query.trim() && (
          <div className="mb-8 flex flex-col gap-3 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
                {t.searchPage.results}
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                {loading
                  ? t.searchPage.searching
                  : `${articles.length} ${
                      articles.length === 1
                        ? t.searchPage.article
                        : t.searchPage.articles
                    } ${t.searchPage.found}`}
              </h2>
            </div>

            {!loading && (
              <p className="text-sm text-black/35">
                {t.searchPage.resultsFor} &quot;{query}&quot;
              </p>
            )}
          </div>
        )}

        {/* Empty Search */}
        {!query.trim() ? (
          <div className="rounded-[2rem] border border-black/10 bg-white px-6 py-20 text-center sm:py-28">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f3] text-2xl">
              ⌕
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em]">
              {t.searchPage.startExploring}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/45">
              {t.searchPage.startDescription}
            </p>
          </div>
        ) : loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="aspect-[16/10] rounded-[1.5rem] bg-black/5" />

                <div className="mt-5 h-3 w-20 rounded bg-black/5" />

                <div className="mt-4 h-7 w-4/5 rounded bg-black/5" />

                <div className="mt-3 h-4 w-full rounded bg-black/5" />

                <div className="mt-2 h-4 w-3/4 rounded bg-black/5" />
              </div>
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const title = isGujarati
                ? article.titleGujarati || article.title
                : article.title;

              const description = isGujarati
                ? article.descriptionGujarati || article.description
                : article.description;

              const categoryName = isGujarati
                ? article.categoryNameGujarati ||
                  article.category?.name ||
                  "Technology"
                : article.category?.name || "Technology";

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
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.coverImage.url}`}
                          alt={article.coverImage.alternativeText || title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-xs font-medium uppercase tracking-widest text-black/25">
                            NEXORA
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-lg opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        →
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                          {categoryName}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-black/30">
                          NEXORA
                        </span>
                      </div>

                      <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] transition-opacity group-hover:opacity-55 sm:text-[1.65rem]">
                        {title}
                      </h2>

                      {description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
                          {description}
                        </p>
                      )}

                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                        {t.searchPage.readArticle}

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
          <div className="rounded-[2rem] border border-black/10 bg-white px-6 py-20 text-center sm:py-28">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f3] text-2xl">
              ×
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em]">
              {t.searchPage.noResults}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/45">
              {t.searchPage.noResultsDescription} &quot;{query}&quot;.
            </p>

            <button
              onClick={() => setQuery("")}
              className="mt-7 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
            >
              {t.searchPage.clearSearch}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default SearchPage;
