import React from "react";
import Card from "../Card/index";

const Cards = ({ props }) => {
  const { cards = [] } = props;

  return (
    <div>
      {cards.map(el => (
        <Card props={el} />
      ))}
    </div>
  );
};

export default Cards;
