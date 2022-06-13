import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm } = props;
  return (
    <form className="search-box">
      <label htmlFor="search-box" className="search-box__label">
        Search
      </label>
      <input
        type="text"
        name="search"
        className="search-box__input"
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBox;
