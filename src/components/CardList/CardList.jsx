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
          ph={beer.ph}
          abv={beer.abv}
          image={beer.image_url}
        />
      ))}
    </div>
  );
};

export default CardList;
