import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, tagline, abv, ph, image } = props;
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
      <h3 className="card__tagline">{tagline}</h3>
      <h4 className="card__tip">Stats</h4>
      <ul className="card__stats">
        <li>ABV: {abv}</li>
        <li>PH: {ph}</li>
      </ul>
    </div>
  );
};

export default Card;
