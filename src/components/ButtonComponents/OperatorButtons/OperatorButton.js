import React from "react";

const OperatorButton = props => {
  return <button className="button operator">{props.operator.value}</button>;
};

export default OperatorButton;
