import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ checkLabel, checked, onCheckboxChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        {checkLabel}
        <input type="checkbox" checked={checked} onChange={onCheckboxChange} />
      </label>
    </div>
  );
};

export default Checkbox;
