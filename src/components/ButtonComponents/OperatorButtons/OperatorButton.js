import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <button
      onClick={e => props.handleInput(e, props.operator.value)}
      className={`button operator btn-${props.operator.char}`}
      value={props.operator.value}
    >
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;
