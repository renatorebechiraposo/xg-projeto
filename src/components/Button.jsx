import React from "react";
import "./Button.css";

const Button = ({ children, OnClick }) => {
  return (
    <div>
      <button className="button" onClick={OnClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
