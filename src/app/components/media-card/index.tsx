import * as S from "./styles";
import Link from "next/link";

const MediaCard = (props: Partial<Movie>) => {
  const year = new Date(props.release_date!).getFullYear();

  return (
    <S.Wrapper>
      <S.ThumbContainer>
        <Link href={`movies/${props.id!}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt="film-thumbnail"
          />
        </Link>
      </S.ThumbContainer>
      <S.Info>
        <span>{year}</span>
        &#x2022;
        <span>Movie</span>
      </S.Info>
      <S.Title>{props.title}</S.Title>
    </S.Wrapper>
  );
};

export default MediaCard;
