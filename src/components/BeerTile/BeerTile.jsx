import React from "react";
import "./BeerTile.scss";

const BeerTile = () => {
  return (
    <div className="tile">
      <div className="basic">
        <img src="" alt="name" />
        <h2>Name</h2>
        <h3>Tagline</h3>
        <p>description</p>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>malt</li>
          <li>hops</li>
        </ul>
      </div>
      <div className="brew">
        <h2>Brewers Tip</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          perferendis laudantium nisi nihil doloremque voluptas quasi
          temporibus. Quaerat unde, laboriosam officiis quod commodi ipsa
          corporis? Consectetur odio illo impedit omnis.
        </p>
      </div>
      <div className="stats">
        <h2>Stats</h2>
        <ul>
          <li>abv</li>
          <li>ibu</li>
          <li>target fg</li>
          <li>target og</li>
          <li>ebc</li>
          <li>srm</li>
          <li>ph</li>
          <li>attenuation_level</li>
        </ul>
      </div>
    </div>
  );
};

export default BeerTile;
