import React, { useState } from "react";
import NumberButton from "./NumberButton";

import { numbers } from "../../../data";

import "../../../App.css";

const Numbers = props => {
  // const [theseNumbers, setTheseNumbers] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers-container">
      {numbers.map(number => (
        <NumberButton calculateNums={props.calculateNums} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
