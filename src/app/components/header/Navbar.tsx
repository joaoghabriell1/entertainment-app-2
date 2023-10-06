import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import MovieIcon from "../../assets/icon-nav-movies.svg";

const Navbar = () => {
  return (
    <S.Navbar>
      <ul>
        <Link href="/movies">
          <li>
            <Image src={MovieIcon} alt="movie page icon" />
            Movies
          </li>
        </Link>
      </ul>
    </S.Navbar>
  );
};

export default Navbar;
