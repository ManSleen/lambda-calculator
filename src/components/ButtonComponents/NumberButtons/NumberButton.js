import React from "react";

const NumberButton = props => {
  console.log(props.number);
  return (
    <button
      onClick={() => props.calculateNums(props.number)}
      className="button number"
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
