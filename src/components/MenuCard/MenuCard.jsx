import React from "react";
import "./MenuCard";

const MenuCard = ({ beers, number, index }) => {
  return (
    <div className="menu-card">
      <img
        className="menu-card__img"
        src={beers[index].image_url}
        alt={beers[index].name}
      />
      <h2 className="menu-card__heading">{beers[index].name}</h2>
      <p className="menu-card__content">{beers[index].food_pairing[number]}</p>
    </div>
  );
};

export default MenuCard;
