import React, { useState } from "react";
import "./TasterMenu.scss";
import MenuCard from "../../components/MenuCard/MenuCard";

const TasterMenu = ({ beers }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [numArr, setNumArr] = useState([1, 12, 4]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  console.log(numArr);
  return (
    <div data-testid="taster-menu" className="taster-menu">
      {activeMenu ? (
        <div className="taster-menu__content">
          <MenuCard beers={beers} index={numArr[0]} number={0} />
          <MenuCard beers={beers} index={numArr[1]} number={1} />
          <MenuCard beers={beers} index={numArr[2]} number={2} />
        </div>
      ) : (
        <div className="taster-menu__container">
          <button className="taster-menu__button" onClick={toggleMenu}>
            Generate your tasting menu
          </button>
          <div className="taster-menu__content">
            <div className="taster-menu__card"></div>
            <div className="taster-menu__card"></div>
            <div className="taster-menu__card"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasterMenu;
