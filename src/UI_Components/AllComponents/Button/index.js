import React from "react";

const Button = ({ props, onFlexiSubmit }) => {
  return (
    <div>
      <button
        onClick={e => {
          onFlexiSubmit(e);
        }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
