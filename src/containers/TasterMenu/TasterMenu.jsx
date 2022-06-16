import React from "react";
import "./TasterMenu.scss";
import MenuCard from "../../components/MenuCard/MenuCard";

const TasterMenu = () => {
  return (
    <div className="taster-menu">
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
};

export default TasterMenu;
