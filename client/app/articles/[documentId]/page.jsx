import Link from "next/link";

import ArticleContent from "./ArticleContent";

export async function generateMetadata({ params }) {
  const { documentId } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${documentId}?populate=*`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      title: "Article Not Found | NEXORA",
    };
  }

  const result = await response.json();
  const article = result.data;

  if (!article) {
    return {
      title: "Article Not Found | NEXORA",
    };
  }

  return {
    title: `${article.title} | NEXORA`,
    description: article.description || "NEXORA — Modern Tech Intelligence",
  };
}

const ArticlePage = async ({ params }) => {
  const { documentId } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${documentId}?populate=*`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5">
        <div className="w-full max-w-md text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            NEXORA
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Article not found
          </h1>

          <p className="mt-4 text-sm leading-6 text-black/50">
            The article you are looking for does not exist or is no longer
            available.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80"
          >
            ← Back to NEXORA
          </Link>
        </div>
      </main>
    );
  }

  const result = await response.json();
  const article = result.data;

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-[-0.04em]">
            Article not found
          </h1>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            Back to NEXORA
          </Link>
        </div>
      </main>
    );
  }

  return <ArticleContent article={article} />;
};

export default ArticlePage;
