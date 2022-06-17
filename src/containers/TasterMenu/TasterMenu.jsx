import React, { useState } from "react";
import "./TasterMenu.scss";
import MenuCard from "../../components/MenuCard/MenuCard";

const TasterMenu = ({ beers }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [numArr, setNumArr] = useState([1, 2, 4]);

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
        <button onClick={toggleMenu}>Generate your tasting menu</button>
      )}
    </div>
  );
};

export default TasterMenu;
