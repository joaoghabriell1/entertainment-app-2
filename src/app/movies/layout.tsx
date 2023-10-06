import React from "react";
import SearchBar from "../components/search-bar";
import * as S from "./styles";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <SearchBar />
      {children}
    </S.Wrapper>
  );
};

export default layout;
