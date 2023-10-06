import DefaultMediaList from "../default-media-list";

const TrendingMoviesList = async () => {
  const res = await fetch(`${process.env.LOCAL_API}/api/trending_movies`);
  const { data } = await res.json();

  return <DefaultMediaList data={data.slice(0, 6)} heading="Treding Movies" />;
};

export default TrendingMoviesList;
