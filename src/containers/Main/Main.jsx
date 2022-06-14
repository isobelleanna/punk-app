import React from "react";
import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
  const { beersArr } = props;
  return (
    <div className="main">
      <CardList beersArr={beersArr} />
    </div>
  );
};

export default Main;
