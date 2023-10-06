import DefaultMediaList from "../default-media-list";
import * as S from "./styles";

const SearchMediaList = async ({
  query,
  page,
}: {
  query: string;
  page: string;
}) => {
  const res = await fetch(
    `http://localhost:3000/api/search-movie/${query}/${page}`
  );
  const { data } = await res.json();

  let content;

  if (data.results.length === 0) {
    content = <S.Message>No results were found for '{query}'</S.Message>;
  } else {
    content = (
      <DefaultMediaList
        data={data.results}
        heading={`Found ${data.total_results} Results for: '${query}'`}
      />
    );
  }

  return <>{content}</>;
};

export default SearchMediaList;
