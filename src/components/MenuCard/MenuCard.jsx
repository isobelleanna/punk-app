import React from "react";
import "./MenuCard";

const MenuCard = ({ beers, number, index }) => {
  return (
    <div>
      <img src={beers[index].image_url} alt={beers[index].name} />
      <h2>{beers[index].name}</h2>
      <p>{beers[index].food_pairing[number]}</p>
    </div>
  );
};

export default MenuCard;
