import React from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const { handleChange, checked } = props;
  return (
    <div className="filter-list">
      <FilterItem
        label="High ABV (>6.0%)"
        type="checkbox"
        value="6"
        handleChange={handleChange}
        checked={checked}
      />
    </div>
  );
};

export default FiltersList;
