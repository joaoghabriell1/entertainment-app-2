type Params = {
  params: {
    movie_id: string;
  };
};

const MovieDetails = async ({ params: { movie_id } }: Params) => {
  const res = await fetch(`http://localhost:3000/api/movie/${movie_id}`);
  const { data } = await res.json();
  return <div>{JSON.stringify(data.original_title)}</div>;
};

export default MovieDetails;
