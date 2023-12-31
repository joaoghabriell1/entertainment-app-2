interface Movie {
  adult: boolean;
  tagline?: string;
  id: number;
  backdrop_path: string;
  title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  genred_ids: { id: number; name: string }[];
  popularity: int;
  status: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  runtime: number;
}
