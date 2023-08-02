import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={{
        color: props.isValid ? "red" : "black",
        backgroundColor: props.isValid ? "white" : "lightcoral",
      }}
      type={props.type}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
