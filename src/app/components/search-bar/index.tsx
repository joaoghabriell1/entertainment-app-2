"use client";
import * as S from "./style";
import Image from "next/image";
import SearchIcon from "../../assets/icon-search.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const path = usePathname();

  const regex = /^\/([^/]+)/;
  const match = path.match(regex)![0];

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query === "") return;
    router.push(`${match}?query=${query}`);
  };
  return (
    <S.Wrapper>
      <form onSubmit={submitHandler}>
        <button>
          <Image src={SearchIcon} alt="search Icon" />
        </button>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.currentTarget.value)
          }
          placeholder="Search for your favorite movie!"
          value={query}
          type="text"
        />
      </form>
    </S.Wrapper>
  );
};

export default SearchBar;
