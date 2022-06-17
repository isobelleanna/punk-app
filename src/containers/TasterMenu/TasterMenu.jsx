import React, { useState } from "react";
import "./TasterMenu.scss";
import MenuCard from "../../components/MenuCard/MenuCard";

const TasterMenu = ({ beers }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const generateRandomNum = () => {
    const n = [];
    for (var i = 0; i < 3; i++) {
      n.push(Math.floor(Math.random() * 80) + 0);
    }
    console.log(n);
    return n;
  };
  return (
    <div className="taster-menu">
      {activeMenu ? (
        <div>
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      ) : (
        <button onClick={generateRandomNum}>Generate your tasting menu</button>
      )}
    </div>
  );
};

export default TasterMenu;
