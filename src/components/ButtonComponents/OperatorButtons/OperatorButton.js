import React from "react";

const OperatorButton = ({ handleOperator, operator }) => {
  return (
    <button
      onClick={e => handleOperator(e)}
      className={`button operator btn-${operator.char}`}
      value={operator.value}
    >
      {operator.char}
    </button>
  );
};

export default OperatorButton;
