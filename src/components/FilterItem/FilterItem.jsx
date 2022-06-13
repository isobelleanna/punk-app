import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { label, type, value, handleChange, checked } = props;
  return (
    <div>
      <label htmlFor="input">
        {label}
        <input
          name="input"
          type={type}
          value={value}
          onChange={handleChange}
          checked={checked}
        />
      </label>
    </div>
  );
};

export default FilterItem;
