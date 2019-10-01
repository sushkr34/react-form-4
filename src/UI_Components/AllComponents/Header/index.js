import React from "react";

const Header = ({ props }) => {
  

  return (
    <div style={props}>
      <label>{props.label}</label>
    </div>
  );
};

export default Header;
