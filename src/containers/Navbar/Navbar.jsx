import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterItem from "../../components/FilterItem/FilterItem";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <div>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList />
    </div>
  );
};

export default Navbar;
