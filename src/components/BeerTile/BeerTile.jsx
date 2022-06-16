import React from "react";
import "./BeerTile.scss";

const BeerTile = ({ randomBeer }) => {
  return (
    <div className="tile">
      <div className="basic">
        <img src={randomBeer[0].image_url} alt={randomBeer[0].name} />
        <h2>{randomBeer[0].name}</h2>
        <h3>{randomBeer[0].tagline}</h3>
        <p>{randomBeer[0].description}</p>
      </div>
      <div className="brew">
        <h2>Brewers Tip</h2>
        <p>{randomBeer[0].brewers_tips}</p>
      </div>
      <div className="stats">
        <h2>Stats</h2>
        <ul>
          <li>ABV: {randomBeer[0].abv}</li>
          <li>IBU: {randomBeer[0].ibu}</li>
          <li>Target FG: {randomBeer[0].target_fg}</li>
          <li>Target OG: {randomBeer[0].target_og}</li>
          <li>EBC: {randomBeer[0].ebc}</li>
          <li>SRC: {randomBeer[0].srm}</li>
          <li>PH: {randomBeer[0].ph}</li>
          <li>Attenuation Level: {randomBeer[0].attenuation_level}</li>
        </ul>
      </div>
    </div>
  );
};

export default BeerTile;
