import React from "react";
import "./MenuCard.scss";
import defaultBeer from "../../assets/images/default-beer.jpg";

const MenuCard = ({ beers, number, index }) => {
  return (
    <div className="menu-card">
      {beers[index].image_url === null ? (
        <img
          className="tile__img tile__img--last"
          src={defaultBeer}
          alt="pint of beer"
        />
      ) : (
        <img
          className="menu-card__img"
          src={beers[index].image_url}
          alt={beers[index].name}
        />
      )}
      <h2 className="menu-card__heading">{beers[index].name}</h2>
      <p className="menu-card__content">{beers[index].food_pairing[number]}</p>
    </div>
  );
};

export default MenuCard;
