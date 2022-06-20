import React, { useState } from "react";
import "./Card.scss";
import whiteCross from "../../assets/images/white-cross.png";

const Card = (props) => {
  const [moreActive, setMoreActive] = useState(false);
  const handleMoreClick = () => {
    setMoreActive(!moreActive);
  };
  const { name, tagline, abv, ph, image, ibu } = props;
  return (
    <div className="card">
      {moreActive ? (
        <div className="card_stats">
          <img
            className="card__cross"
            src={whiteCross}
            alt="white cross"
            onClick={handleMoreClick}
          />
          <h4 className="card__stats--heading">Stats</h4>
          <ul>
            <li className="card__stats--list">ABV: {abv}</li>
            {ph !== null ? (
              <li className="card__stats--list">PH: {ph}</li>
            ) : null}
            {ibu !== null ? (
              <li className="card__stats--list">IBU: {ibu}</li>
            ) : null}
          </ul>
        </div>
      ) : (
        <div className="card__basic">
          <img className="card__image" src={image} alt={name} />
          <h2 className="card__name">{name}</h2>
          <h3 className="card__tagline">{tagline}</h3>
          <button className="card__button" onClick={handleMoreClick}>
            Find Out More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
