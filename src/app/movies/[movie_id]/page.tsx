type Params = {
  params: {
    movie_id: string;
  };
};
const API_TOKEN: string =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDczOWMxYTcxMDU5OTIxMWVjNDAwODdjOGNlNWU0OCIsInN1YiI6IjY1MGI2MzdmYWVkZTU5MWFiMzM4OTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tR_nnHxt5WCM86ST6Zw8XYezk-of-K0Bt3AbwfgkpY";

const MovieDetails = async ({ params: { movie_id } }: Params) => {
  const res = await fetch(`http://localhost:3000/api/movie/${movie_id}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });
  const { data } = await res.json();
  return <div>{JSON.stringify(data.original_title)}</div>;
};

export default MovieDetails;
