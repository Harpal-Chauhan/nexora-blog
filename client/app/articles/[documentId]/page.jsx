// import Link from "next/link";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// export async function generateMetadata({ params }) {
//   const { documentId } = await params;

//   const response = await fetch(
//     `http://localhost:1337/api/articles/${documentId}?populate=*`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) {
//     return {
//       title: "Article Not Found | NEXORA",
//     };
//   }

//   const result = await response.json();
//   const article = result.data

//   if (!article) {
//     return {
//       title: "Article Not Found | NEXORA",
//     };
//   }

//   return {
//     title: `${article.title} | NEXORA`,
//     description: article.description || "NEXORA — Modern Tech Intelligence",
//   };
// }

// const ArticlePage = async ({ params }) => {
//   const { documentId } = await params;

//   const response = await fetch(
//     `http://localhost:1337/api/articles/${documentId}?populate=*`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5">
//         <div className="w-full max-w-md text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
//             NEXORA
//           </p>

//           <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
//             Article not found
//           </h1>

//           <p className="mt-4 text-sm leading-6 text-black/50">
//             The article you are looking for does not exist or is no longer
//             available.
//           </p>

//           <Link
//             href="/"
//             className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80"
//           >
//             ← Back to NEXORA
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const result = await response.json();
//   const article = result.data;

//   if (!article) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5">
//         <div className="text-center">
//           <h1 className="text-4xl font-black tracking-[-0.04em]">
//             Article not found
//           </h1>

//           <Link
//             href="/"
//             className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
//           >
//             Back to NEXORA
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
//       <Navbar />

//       {/* Article Header */}
//       <section className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
//         {/* Category */}
//         <div className="flex flex-wrap items-center gap-3">
//           <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
//             NEXORA
//           </span>

//           {article.category && (
//             <>
//               <span className="text-black/20">•</span>

//               <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black/55">
//                 {article.category.name}
//               </span>
//             </>
//           )}
//         </div>

//         {/* Title */}
//         <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
//           {article.title}
//         </h1>

//         {/* Description */}
//         {article.description && (
//           <p className="mt-6 max-w-3xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8 lg:text-xl">
//             {article.description}
//           </p>
//         )}

//         {/* Meta */}
//         {article.publishedDate && (
//           <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-black/40">
//             <span>
//               Published{" "}
//               {new Date(article.publishedDate).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>

//             <span className="text-black/20">•</span>

//             <span>NEXORA Editorial</span>
//           </div>
//         )}
//       </section>

//       {/* Cover Image */}
//       {article.coverImage && (
//         <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//           <div className="group relative overflow-hidden rounded-[1.5rem] bg-black/5 sm:rounded-[2rem]">
//             <img
//               src={`http://localhost:1337${article.coverImage.url}`}
//               alt={article.coverImage.alternativeText || article.title}
//               className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px] md:h-[500px] lg:h-[620px]"
//             />

//             {/* Image Overlay */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
//           </div>
//         </section>
//       )}

//       {/* Article Content */}
//       <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//         <div className="space-y-7 text-[17px] leading-8 text-black/75 sm:text-lg sm:leading-9">
//           {article.content?.map((block, index) => {
//             const text =
//               block.children?.map((child) => child.text || "").join("") || "";

//             if (!text.trim()) return null;

//             return (
//               <p
//                 key={index}
//                 className="first-letter:text-3xl first-letter:font-bold"
//               >
//                 {text}
//               </p>
//             );
//           })}
//         </div>
//       </article>

//       {/* Article Footer */}
//       <section className="border-t border-black/10">
//         <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
//                 NEXORA
//               </p>

//               <p className="mt-2 max-w-sm text-sm leading-6 text-black/45">
//                 Modern tech intelligence, ideas and digital trends shaping what
//                 comes next.
//               </p>
//             </div>

//             <Link
//               href="/#topics"
//               className="inline-flex w-fit items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/80"
//             >
//               Explore topics →
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// export default ArticlePage

import Link from "next/link";

import ArticleContent from "./ArticleContent";

export async function generateMetadata({ params }) {
  const { documentId } = await params;

  const response = await fetch(
    `http://localhost:1337/api/articles/${documentId}?populate=*`,
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
    `http://localhost:1337/api/articles/${documentId}?populate=*`,
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
