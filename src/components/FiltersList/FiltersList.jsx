import React from "react";
import "./FiltersList.scss";
import Range from "../Range/Range";
import Checkbox from "../Checkbox/Checkbox";

const FiltersList = (props) => {
  const {
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
    <div className="filter-list">
      <Range
        label={label}
        id={id}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
      />
      <section className="filter-list__checkboxes">
        <Checkbox
          checkLabel="High ABV (>6.0%)"
          onCheckboxChange={onCheckboxChangeABV}
          checked={checkedABV}
        />
        <Checkbox
          checkLabel="Classic Range"
          onCheckboxChange={onCheckboxChangeClassic}
          checked={checkedClassic}
        />
        <Checkbox
          checkLabel="Acidic (ph < 4)"
          onCheckboxChange={onCheckboxChangeAcid}
          checked={checkedAcid}
        />
      </section>
    </div>
  );
};

export default FiltersList;
