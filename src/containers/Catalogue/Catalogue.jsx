import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import "./Catalogue.scss";

const Catalogue = (props) => {
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
    beersArr,
  } = props;
  return (
    <div data-testid="catalogue" className="catalogue">
      <section className="catalogue__navbar">
        <Navbar
          handleInput={handleInput}
          searchTerm={searchTerm}
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
      </section>
      <section className="catalogue__main">
        <Main beersArr={beersArr} />
      </section>
    </div>
  );
};

export default Catalogue;
