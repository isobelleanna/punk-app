import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = (props) => {
  const { searchTerm, handleInput, handleChange, checked } = props;
  return (
    <div>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList handleChange={handleChange} checked={checked} />
    </div>
  );
};

export default Navbar;
