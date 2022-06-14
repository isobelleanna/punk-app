import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";
import "./Navbar.scss";

const Navbar = (props) => {
  const {
    searchTerm,
    handleInput,
    label,
    id,
    onChange,
    value,
    min = 1,
    max = 80,
    checkedABV,
    checkedClassic,
    checkedAcid,
    onCheckboxChangeABV,
    onCheckboxChangeAcid,
    onCheckboxChangeClassic,
  } = props;
  return (
    <div className="nav-bar">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList
        label={label}
        id={id}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        onCheckboxChangeABV={onCheckboxChangeABV}
        checkedABV={checkedABV}
        onCheckboxChangeClassic={onCheckboxChangeClassic}
        checkedClassic={checkedClassic}
        onCheckboxChangeAcid={onCheckboxChangeAcid}
        checkedAcid={checkedAcid}
      />
    </div>
  );
};

export default Navbar;
