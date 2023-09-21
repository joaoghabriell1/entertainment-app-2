import React from "react";
import SearchBar from "../components/search-bar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default layout;
