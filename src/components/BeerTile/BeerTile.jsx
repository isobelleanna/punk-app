import React from "react";
import "./BeerTile.scss";

const BeerTile = ({ randomBeer }) => {
  return (
    <div className="tile">
      <div className="basic">
        <img src="" alt="" />
        <h2>name</h2>
        <h3>tagline</h3>
        <p>description</p>
      </div>
      <div className="brew">
        <h2>Brewers Tip</h2>
        <p>brewers_tips</p>
      </div>
      <div className="stats">
        <h2>Stats</h2>
        <ul>
          <li>ABV: .abv</li>
          <li>IBU: .ibu</li>
          <li>Target FG: .target_fg</li>
          <li>Target OG: .target_og</li>
          <li>EBC: .ebc</li>
          <li>SRC: .srm</li>
          <li>PH: .ph</li>
          <li>Attenuation Level: .attenuation_level</li>
        </ul>
      </div>
    </div>
  );
};

export default BeerTile;
