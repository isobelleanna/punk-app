import React from "react";
import "./Landing.scss";
import beerNeon from "../../assets/images/beer-background.jpg";

const Landing = () => {
  return (
    <div className="landing">
      <img className="landing__img" src={beerNeon} alt="Neon sign of a beer" />
      <div className="landing__content">
        <h1 className="landing__content--title">
          GREAT BEER THAT'S GREAT FOR THE PLANET
        </h1>
        <p className="landing__content--para">
          Exceptional quality is the cornerstone of our brewery. All BrewDog
          beers are brewed using the finest malted barley and hops from the best
          producers around the world.
        </p>
      </div>
    </div>
  );
};

export default Landing;
