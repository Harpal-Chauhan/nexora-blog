import HomeContent from "./components/HomeContent";

const Home = async () => {
  const articleResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
    {
      cache: "no-store",
    },
  );

  const articleResult = await articleResponse.json();
  const articles = articleResult.data || [];

  const categoryResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=*`,
    {
      cache: "no-store",
    },
  );

  const categoryResult = await categoryResponse.json();
  const categories = categoryResult.data || [];

  return (
    <HomeContent
      articles={articles}
      categories={categories}
    />
  );
};

export default Home;