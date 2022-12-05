import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <form className="relative my-2">
      <input
        type="search"
        className="w-full bg-[#F4F2F2] rounded-xl pl-12 placeholder:text-lg placeholder:font-medium p-3"
        placeholder="Search"
      />

      <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl fill-[#999999]" />
    </form>
  );
};

export default SearchBar;
