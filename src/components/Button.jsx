import React from "react";

const Button = ({ text, click }) => {
  if (text == null) {
    text = "I am Button";
  }
  return <button onClick={click}>{text}</button>;
};

export default Button;
