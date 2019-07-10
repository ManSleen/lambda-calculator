import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

import { operators } from "../../../data";

const Operators = ({ handleOperator }) => {
  const [theseOperators, setTheseOperators] = useState(operators);
  return (
    <div>
      {theseOperators.map(operator => (
        <OperatorButton handleOperator={handleOperator} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
