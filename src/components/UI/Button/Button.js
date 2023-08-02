import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.isValid ? "red" : "lightcoral",
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
