import React from "react";

const SpecialButton = ({ clearDisplay, special }) => {
  return (
    <button onClick={clearDisplay} className="button special">
      {special}
    </button>
  );
};

export default SpecialButton;
