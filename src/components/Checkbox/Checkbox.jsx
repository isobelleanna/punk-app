import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ checkLabel, checked, onCheckboxChange }) => {
  return (
    <div>
      <label>
        {checkLabel}
        <input type="checkbox" checked={checked} onChange={onCheckboxChange} />
      </label>
    </div>
  );
};

export default Checkbox;
