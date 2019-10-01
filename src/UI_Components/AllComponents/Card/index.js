import React from "react";

const Card = ({ props,child }) => {
  
  // console.log(props);
  
  return (
    <div style={props}>
      <label>{props.label}</label>
      {child}
    </div>
  );
};

export default Card;
