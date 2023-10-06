import * as S from "./styles";
import MediaCard from "../media-card";

interface Props {
  data: Movie[];
  heading: string;
}

const DefaultMediaList = ({ data, heading }: Props) => {
  return (
    <div>
      <S.Heading>{heading}</S.Heading>
      <S.Ul>
        {data?.map((movie: Movie, index: any) => {
          return (
            <MediaCard
              id={movie.id}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              release_date={movie.release_date}
              overview={movie.overview}
              title={movie.title}
              key={index}
            />
          );
        })}
      </S.Ul>
    </div>
  );
};

export default DefaultMediaList;
