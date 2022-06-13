import React from "react";
import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
  const { beersArr } = props;
  return (
    <div>
      <CardList beersArr={beersArr} />
    </div>
  );
};

export default Main;
