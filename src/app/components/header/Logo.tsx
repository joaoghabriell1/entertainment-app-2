import Link from "next/link";
import Image from "next/image";
import LogoIcon from "../../assets/logo.svg";
import * as S from "./styles";
const Logo = () => {
  return (
    <S.Logo>
      <Link href="/">
        <Image src={LogoIcon} alt="logo page icon" />
      </Link>
    </S.Logo>
  );
};

export default Logo;
