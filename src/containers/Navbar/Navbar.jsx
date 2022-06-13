import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterItem from "../../components/FilterItem/FilterItem";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = () => {
  return (
    <div>
      <SearchBox />
      <FiltersList />
      <FilterItem />
    </div>
  );
};

export default Navbar;
