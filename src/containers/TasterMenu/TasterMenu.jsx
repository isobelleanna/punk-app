import React, { useState } from "react";
import "./TasterMenu.scss";
import MenuCard from "../../components/MenuCard/MenuCard";

const TasterMenu = () => {
  const [randomArr, setRandomArr] = useState([]);

  const getRandom = async () => {
    const url = "https://api.punkapi.com/v2/beers/random";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="taster-menu">
      <MenuCard />
      <button onClick={getRandom}>Generate Stater</button>
      <MenuCard />
      <button onClick={getRandom}>Generate Main</button>
      <MenuCard />
      <button onClick={getRandom}>Generate Generate Dessert</button>
    </div>
  );
};

export default TasterMenu;
