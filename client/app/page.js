import HomeContent from "./components/HomeContent";

const Home = async () => {
  const articleResponse = await fetch(
    "http://localhost:1337/api/articles?populate=*",
    {
      cache: "no-store",
    },
  );

  const articleResult = await articleResponse.json();
  const articles = articleResult.data || [];

  const categoryResponse = await fetch(
    "http://localhost:1337/api/categories?populate=*",
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