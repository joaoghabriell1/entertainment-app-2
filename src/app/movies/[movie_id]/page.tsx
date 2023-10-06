import * as S from "./styles";
import Image from "next/image";

type Params = {
  params: {
    movie_id: string;
  };
};

const MovieDetails = async ({ params: { movie_id } }: Params) => {
  const res = await fetch(`${process.env.LOCAL_API}/api/movie/${movie_id}`);
  const { data }: { data: Movie } = await res.json();

  const year = new Date(data.release_date).getFullYear();
  const score = (data.vote_average / 2).toFixed(2);
  return (
    <S.Wrapper>
      <S.PosterContainer>
        <Image
          width={200}
          height={400}
          quality={100}
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="movie poster"
        />
      </S.PosterContainer>
      <S.InfoContainer>
        <S.TitleWrapper>
          <S.MovieTitle>{data.title}</S.MovieTitle>
          <S.Tagline>{data.tagline}</S.Tagline>
        </S.TitleWrapper>
        <S.Score>
          <h3>{score}/5.00</h3>
        </S.Score>
        <S.StatsContainer>
          <div>
            <S.StatsTitle>Length</S.StatsTitle>
            <span>{data.runtime}</span>
          </div>
          <div>
            <S.StatsTitle>Language</S.StatsTitle>
            <span>{data.original_language}</span>
          </div>
          <div>
            <S.StatsTitle>Year</S.StatsTitle>
            <span>{year}</span>
          </div>
          <div>
            <S.StatsTitle>Status</S.StatsTitle>
            <span>{data.status}</span>
          </div>
        </S.StatsContainer>
        <S.Synopsis>
          <h3>Synopsis</h3>
          <p>{data.overview}</p>
        </S.Synopsis>
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default MovieDetails;
