import React from "react";
import Link from "next/link";
const PopularMoviesList = async () => {
  const res = await fetch("http://localhost:3000/api/popular_movies");
  const { data } = await res.json();
  return (
    <div>
      <h3>Popular Movies</h3>
      {data?.map((movie: any, index: any) => {
        return (
          <li key={index}>
            <Link href={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default PopularMoviesList;
