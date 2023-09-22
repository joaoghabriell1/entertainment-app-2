import React from "react";
import SearchMediaList from "../components/search-media-list";
import TrendingMoviesList from "../components/trending_movies_list";
import PopularMoviesList from "../components/popular_movies_list";

const Movie = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams.query;
  let content = (
    <>
      <h2>Movies Page</h2>
    </>
  );

  if (query) {
    content = <SearchMediaList query={query as string} />;
  }

  return (
    <div>
      <TrendingMoviesList />
      <PopularMoviesList />
      {content}
    </div>
  );
};

export default Movie;
