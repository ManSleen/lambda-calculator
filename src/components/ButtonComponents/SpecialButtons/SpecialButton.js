import React from "react";

const SpecialButton = ({ handleInput, special }) => {
  return (
    <button
      onClick={e => handleInput(e)}
      className="button special"
      value={special}
    >
      {special}
    </button>
  );
};

export default SpecialButton;
