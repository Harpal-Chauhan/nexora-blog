"use client";

import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const AboutPPage = () => {
  const { t } = useLanguage();
  const topics = [
    {
      number: "01",
      title: t.aboutPage.topics.AI.title,
      description: t.aboutPage.topics.AI.description,
    },
    {
      number: "02",
      title: t.aboutPage.topics.webDevelopment.title,
      description: t.aboutPage.topics.webDevelopment.description,
    },
    {
      number: "03",
      title: t.aboutPage.topics.programming.title,
      description: t.aboutPage.topics.programming.description,
    },
    {
      number: "04",
      title: t.aboutPage.topics.futureTech.title,
      description: t.aboutPage.topics.futureTech.description,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-5xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40 sm:text-xs">
            {t.aboutPage.label}
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
            {t.aboutPage.heroTitle1}
            <br />
            {t.aboutPage.heroTitle2}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8 lg:text-xl">
            {t.aboutPage.heroDescription}
          </p>
        </div>

        {/* Small intro line */}
        <div className="mt-14 flex items-center gap-4 border-t border-black/10 pt-5 sm:mt-20">
          <span className="h-px w-10 bg-black/30" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
            {t.aboutPage.modernTech}
          </span>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-black/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-8 lg:py-28">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              {t.aboutPage.perspective}
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {t.aboutPage.perspectiveTitle}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/60 sm:text-lg">
            <p>{t.aboutPage.paragraph1}</p>

            <p>{t.aboutPage.paragraph2}</p>

            <p>{t.aboutPage.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              {t.aboutPage.whatWeCover}
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              {t.aboutPage.exploreTopics}
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45">
            {t.aboutPage.topicsDescription}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <div
              key={topic.number}
              className="group min-h-[250px] rounded-[1.5rem] border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-black/30">
                  {topic.number}
                </span>

                <span className="text-lg text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-bold tracking-[-0.04em]">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Statement */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="max-w-5xl text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-6xl">
            {t.aboutPage.quote}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-xs">
              {t.aboutPage.exploreNexora}
            </p>

            <h2 className="mt-3 max-w-xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">
              {t.aboutPage.discoverNext}
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
              {t.aboutPage.ctaDescription}
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
          >
            {t.aboutPage.exploreArticles}
            <span className="ml-2 text-base">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPPage;
