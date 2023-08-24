import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <button>{props.name}</button>
    </>
  );
};

export default Button;
