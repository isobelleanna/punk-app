import React from "react";
import "./BeerTile.scss";
import defaultBeer from "../../assets/images/default-beer.jpg";

const BeerTile = ({ randomBeer }) => {
  return (
    <div className="tile">
      <div className="tile__container">
        {randomBeer[0].image_url ? (
          <img
            className="tile__img"
            src={randomBeer[0].image_url}
            alt={randomBeer[0].name}
          />
        ) : (
          <img className="tile__img" src={defaultBeer} alt="pint of beer" />
        )}
      </div>
      <div className="tile__basic">
        <h2 className="tile__basic--heading">{randomBeer[0].name}</h2>
        <h3 className="tile__basic--content">{randomBeer[0].tagline}</h3>
        <p className="tile__basic--content">{randomBeer[0].description}</p>
      </div>
      <div className="tile__brew">
        <h2 className="tile__brew--heading">Brewers Tip</h2>
        <p className="tile__brew--content">{randomBeer[0].brewers_tips}</p>
      </div>
      <div className="tile__stats">
        <h2 className="tile__stats--heading">Stats</h2>
        <ul>
          <li className="tile__stats--content">ABV: {randomBeer[0].abv}</li>
          <li className="tile__stats--content">IBU: {randomBeer[0].ibu}</li>
          <li className="tile__stats--content">
            Target FG: {randomBeer[0].target_fg}
          </li>
          <li className="tile__stats--content">
            Target OG: {randomBeer[0].target_og}
          </li>
          <li className="tile__stats--content">EBC: {randomBeer[0].ebc}</li>
          <li className="tile__stats--content">SRC: {randomBeer[0].srm}</li>
          <li className="tile__stats--content">PH: {randomBeer[0].ph}</li>
          <li className="tile__stats--content">
            Attenuation Level: {randomBeer[0].attenuation_level}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BeerTile;
