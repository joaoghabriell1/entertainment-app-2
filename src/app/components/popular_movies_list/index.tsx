import DefaultMediaList from "../default-media-list";

const PopularMoviesList = async () => {
  const res = await fetch(`${process.env.LOCAL_API}/api/popular_movies`);
  const { data } = await res.json();
  return <DefaultMediaList data={data.slice(0, 6)} heading="Popular Movies" />;
};

export default PopularMoviesList;
