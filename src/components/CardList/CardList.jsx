import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
  const { beersArr } = props;
  return (
    <div className="card-list">
      {beersArr.map((beer) => (
        <Card
          key={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          brewersTip={beer.brewers_tips}
          foodPairings={beer.food_pairing}
          image={beer.image_url}
        />
      ))}
    </div>
  );
};

export default CardList;
