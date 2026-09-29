"use client";

import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

const HomeContent = ({ articles, categories }) => {
  const { language, t } = useLanguage();

  const isGujarati = language === "gu";

  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-black">
      <Navbar />

      {/* HERO */}
      <main>
        <section className="px-6 pt-20 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                {t.modernTech}
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                {t.title}
                <br />
                <span className="text-gray-400">{t.title2}</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                {t.subtitle}
              </p>

              <Link
                href="/topics"
                className="mt-10 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                {t.exploreStories}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED STORY */}
        {featuredArticle && (
          <section className="px-6 pb-24 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <Link
                href={`/articles/${featuredArticle.documentId}`}
                className="group block overflow-hidden rounded-[2rem] bg-white"
              >
                <div className="grid md:grid-cols-2">
                  {/* IMAGE */}
                  <div className="relative min-h-[320px] overflow-hidden bg-gray-200 md:min-h-[500px]">
                    {featuredArticle.coverImage?.url ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${featuredArticle.coverImage.url}`}
                        alt={featuredArticle.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        {t.noImage}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                    <div>
                      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                        <span>{t.featuredStory}</span>

                        {featuredArticle.category && (
                          <>
                            <span>•</span>

                            <span>
                              {isGujarati
                                ? featuredArticle.categoryNameGujarati ||
                                  featuredArticle.category?.name ||
                                  "Technology"
                                : featuredArticle.category?.name ||
                                  "Technology"}
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                        {isGujarati
                          ? featuredArticle.titleGujarati ||
                            featuredArticle.title
                          : featuredArticle.title}
                      </h2>

                      <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                        {isGujarati
                          ? featuredArticle.descriptionGujarati ||
                            featuredArticle.description
                          : featuredArticle.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {t.exploreArticle}
                      </span>

                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* LATEST STORIES */}
        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  {t.latestStories}
                </p>

                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {t.latestStories}
                </h2>
              </div>
            </div>

            {latestArticles.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestArticles.map((article) => {
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
                      className="group overflow-hidden rounded-[1.5rem] bg-white transition duration-300 hover:-translate-y-1"
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                        {article.coverImage?.url ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.coverImage.url}`}
                            alt={title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-400">
                            {t.noImage}
                          </div>
                        )}
                      </div>

                      {/* CARD CONTENT */}
                      <div className="p-6">
                        <div className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                          {categoryName}
                        </div>

                        <h3 className="text-xl font-semibold leading-tight tracking-tight">
                          {title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                          {description}
                        </p>

                        <div className="mt-6 flex items-center justify-between text-sm font-medium">
                          <span>{t.readArticle}</span>

                          <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[1.5rem] bg-white p-10 text-center">
                <p className="text-gray-500">{t.noStories}</p>
              </div>
            )}
          </div>
        </section>

        {/* TOPICS */}
        <section className="border-t border-gray-200 px-6 py-24 md:px-10 lg:px-16" id="topics">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500" >
                {t.topics}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {t.browseByCategory}
              </h2>
            </div>

            {categories?.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((category, index) => (
                  <Link
                    key={category.documentId || category.id}
                    href={`/topics/${category.slug}`}
                    className="group rounded-[1.5rem] bg-white p-6 transition duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        0{index + 1}
                      </span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold">
                      {t.categories?.[category.name] || category.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      /{category.slug}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t.topicsComingSoon}</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeContent;
