import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, tagline, abv, ph, image } = props;
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
      <h3 className="card__tagline">{tagline}</h3>
      <div className="card_stats">
        <h4 className="card__stats--heading">Stats</h4>
        <ul>
          <li className="card__stats--list">ABV: {abv}</li>
          <li className="card__stats--list">PH: {ph}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
