import React from "react";

const SearchMediaList = async ({ query }: { query: string }) => {
  const res = await fetch(`http://localhost:3000/api/search-movie/${query}`);
  const { data } = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default SearchMediaList;
