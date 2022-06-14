import React from "react";
import "./Range.scss";

const Range = ({ min = 1, max = 80, label, id, onChange, value }) => {
  return (
    <div className="range-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Range;
