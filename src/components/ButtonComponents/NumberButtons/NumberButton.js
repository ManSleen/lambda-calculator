import React from "react";

const NumberButton = ({ handleInput, number }) => {
  return (
    <button
      onClick={e => handleInput(e, number)}
      className={`button number btn-${number}`}
      value={number}
    >
      {number}
    </button>
  );
};

export default NumberButton;
