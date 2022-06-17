import React, { useState } from "react";
import "./RandomBeer.scss";
import BeerTile from "../../components/BeerTile/BeerTile";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  const getRandomBeer = async () => {
    const url = "https://api.punkapi.com/v2/beers/random";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRandomBeer(data);
  };
  return (
    <div className="random">
      <button onClick={getRandomBeer}>Get Beer of the Day</button>
      <BeerTile randomBeer={randomBeer} />
    </div>
  );
};

export default RandomBeer;
