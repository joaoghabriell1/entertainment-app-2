import React from "react";

const TrendingMoviesList = async () => {
  const res = await fetch("http://localhost:3000/api/trending_movies");
  const { data } = await res.json();
  return (
    <div>
      <h3>Trending Movies List</h3>
      <p>
        {data.map((movie: any, index: any) => {
          return <li key={index}>{movie.original_title}</li>;
        })}
      </p>
    </div>
  );
};

export default TrendingMoviesList;
