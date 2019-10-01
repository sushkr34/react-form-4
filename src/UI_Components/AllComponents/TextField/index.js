import React from "react";

const TextField = ({ props, handleChange }) => {
  const displayTextFieldHandler = () => {
    if (props.inputType === "text") {
      return (
        <input
          type="text"
          onChange={e => handleChange(e.target.value, props.name)}
        />
      );
    }
    if (props.inputType === "email") {
      return (
        <input
          type="email"
          onChange={e => handleChange(e.target.value, props.name)}
        />
      );
    }
    if (props.inputType === "password") {
      return (
        <input
          type="password"
          onChange={e => handleChange(e.target.value, props.name)}
        />
      );
    }
    if (props.inputType === "number") {
      return (
        <input
          type="number"
          onChange={e => handleChange(e.target.value, props.name)}
        />
      );
    }
  };
  return (
    <div>
      <label>{props.label}</label>
      {displayTextFieldHandler()}
    </div>
  );
};

export default TextField;
