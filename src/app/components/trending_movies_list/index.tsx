import React from "react";

const TrendingMoviesList = async () => {
  const res = await fetch(`${process.env.LOCAL_API}/api/trending_movies`);
  const { data } = await res.json();
  return (
    <div>
      <h3>Trending Movies List</h3>
      {data?.map((movie: any, index: any) => {
        return <li key={index}>{movie.original_title}</li>;
      })}
    </div>
  );
};

export default TrendingMoviesList;
