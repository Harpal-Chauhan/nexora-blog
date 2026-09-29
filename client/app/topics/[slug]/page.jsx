import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import TopicsClient from "./TopicsClient";

const TopicsPage = async ({ params }) => {
  const { slug } = await params;

  // Get category
  const categoryResponse = await fetch(
    `http://localhost:1337/api/categories?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    },
  );

  const categoryResult = await categoryResponse.json();
  const category = categoryResult.data?.[0];

  // Topic not found
  if (!category) {
    return (
      <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center px-5 sm:px-6">
          <div className="w-full max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white">
              <span className="text-xl text-black/40">×</span>
            </div>

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
              NEXORA / 404
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              Topic not found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/45">
              The topic you&apos;re looking for doesn&apos;t exist or may have
              been removed.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
            >
              ← Back to home
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Get articles of this category
  const articleResponse = await fetch(
    `http://localhost:1337/api/articles?filters[category][slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    },
  );

  const articleResult = await articleResponse.json();
  const articles = articleResult.data || [];

  return <TopicsClient category={category} articles={articles} />;
};

export default TopicsPage;
