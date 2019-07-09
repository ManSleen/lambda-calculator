import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

import { operators } from "../../../data";

const Operators = () => {
  const [theseOperators, setTheseOperators] = useState(operators);
  return (
    <div>
      {theseOperators.map(operator => (
        <OperatorButton operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
