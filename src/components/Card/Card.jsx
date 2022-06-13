import React from "react";
import "./Card.scss";
const Card = (props) => {
  const { name, tagline, brewersTip, foodPairings, image } = props;
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      <h4>{brewersTip}</h4>
      <ul>
        Food Pairings
        <li>{foodPairings[0]}</li>
        <li>{foodPairings[1]}</li>
        <li>{foodPairings[2]}</li>
      </ul>
    </div>
  );
};

export default Card;
