import React, { useState } from "react";
import NumberButton from "./NumberButton";

import { numbers } from "../../../data";

import "../../../App.css";

const Numbers = ({ handleInput }) => {
  const [theseNumbers, setTheseNumbers] = useState(numbers);

  return (
    <div className="numbers-container">
      {theseNumbers.map(number => (
        <NumberButton key={number} handleInput={handleInput} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
