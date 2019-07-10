import React, { useState } from "react";
import NumberButton from "./NumberButton";

import { numbers } from "../../../data";

import "../../../App.css";

const Numbers = props => {
  const [theseNumbers, setTheseNumbers] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers-container">
      {theseNumbers.map(number => (
        <NumberButton handleInput={props.handleInput} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
