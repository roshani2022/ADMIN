import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`form-control ${!props.isValid ? "invalid" : "valid"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
