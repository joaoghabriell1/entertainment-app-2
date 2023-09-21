"use client";
import React, { useState } from "react";
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
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.currentTarget.value)
          }
          value={query}
          type="text"
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
