import React from "react";
import "./RandomBeer.scss";
import BeerTile from "../../components/BeerTile/BeerTile";

const RandomBeer = () => {
  return (
    <div className="random">
      <BeerTile />
    </div>
  );
};

export default RandomBeer;
