import React from "react";
import "./RandomBeer.scss";
import BeerTile from "../../components/BeerTile/BeerTile";

const RandomBeer = ({ randomBeer }) => {
  return (
    <div className="random">
      <BeerTile randomBeer={randomBeer} />
    </div>
  );
};

export default RandomBeer;
