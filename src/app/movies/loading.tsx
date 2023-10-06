"use client";
import * as S from "./styles";
import { TailSpin } from "react-loader-spinner";

const loading = () => {
  return (
    <S.LoadingStateWrapper>
      <TailSpin height="40" width="40" color="#fff" ariaLabel="loading" />
    </S.LoadingStateWrapper>
  );
};

export default loading;
