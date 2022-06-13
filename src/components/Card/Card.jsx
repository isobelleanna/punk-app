import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, tagline, brewersTip, foodPairings, image } = props;
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
      <h3 className="card__tagline">{tagline}</h3>
      <h4 className="card__tip">{brewersTip}</h4>
      <ul className="card__food">
        Food Pairings
        <li>{foodPairings[0]}</li>
        <li>{foodPairings[1]}</li>
        <li>{foodPairings[2]}</li>
      </ul>
    </div>
  );
};

export default Card;
