import SearchMediaList from "../components/search-media-list";
import TrendingMoviesList from "../components/trending_movies_list";
import PopularMoviesList from "../components/popular_movies_list";

const Movie = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams.query;
  const page = searchParams.page;

  let content;

  if (query) {
    content = <SearchMediaList page={page as string} query={query as string} />;
  } else {
    content = (
      <>
        <TrendingMoviesList />
        <PopularMoviesList />
      </>
    );
  }

  return <>{content}</>;
};

export default Movie;
