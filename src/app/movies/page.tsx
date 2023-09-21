import React from "react";
import TrendingMoviesList from "../components/trending_movies_list";
import PopularMoviesList from "../components/popular_movies_list";
import SearchMediaList from "../components/search-media-list";

const Movie = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams.query;
  let content = (
    <>
      <h2>Movies Page</h2>
      <TrendingMoviesList />
      <PopularMoviesList />
    </>
  );

  if (query) {
    content = <SearchMediaList query={query as string} />;
  }

  return <div>{content}</div>;
};

export default Movie;
