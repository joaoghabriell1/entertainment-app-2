import React from "react";
import * as S from "./styles";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Navbar />
    </S.Header>
  );
};

export default Header;
