import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNum, setFirstNum] = useState(null);
  const [waitingForSecondNum, setWaitingForSecondNum] = useState(false);
  const [operator, setOperator] = useState(null);
  const [isNegative, setIsNegative] = useState(false);

  const handleInput = (e, num) => {
    if (e.target.value === "C") {
      setDisplay("0");
      setFirstNum(null);
      setWaitingForSecondNum(false);
      setOperator(null);
    } else if (e.target.value === ".") {
      if (waitingForSecondNum === true) return;
      if (!display.includes(".")) {
        setDisplay(display + ".");
      }
    } else if (waitingForSecondNum === true) {
      setDisplay(num);
      setWaitingForSecondNum(false);
    } else if (e.target.value === "+/-") {
      setIsNegative(!isNegative);
      isNegative && !display.includes("-")
        ? setDisplay(-display)
        : setDisplay(display);
    } else {
      let currentNum = display === "0" ? num : display + num;
      setDisplay(currentNum);
    }
  };

  const handleOperator = e => {
    const inputValue = parseFloat(display);
    if (operator && waitingForSecondNum) {
      setOperator(e.target.value);
      return;
    }
    if (firstNum === null) {
      setFirstNum(inputValue);
    } else if (operator) {
      const currentVal = firstNum || 0;
      const result = performCalculation[operator](currentVal, inputValue);
      setDisplay(String(result));
      setFirstNum(result);
    }
    setWaitingForSecondNum(true);
    setOperator(e.target.value);
  };

  const performCalculation = {
    "/": (firstNum, secondNum) => firstNum / secondNum,
    "*": (firstNum, secondNum) => firstNum * secondNum,
    "+": (firstNum, secondNum) => firstNum + secondNum,
    "-": (firstNum, secondNum) => firstNum - secondNum,
    "=": (firstNum, secondNum) => secondNum
  };

  return (
    <div className="container">
      <Logo />
      <Display display={display} />
      <div className="calculator-keypad">
        <div className="calculator-left">
          <Specials handleInput={handleInput} />
          <Numbers handleInput={handleInput} />
        </div>
        <div className="calculator-right">
          <Operators handleOperator={handleOperator} />
        </div>
      </div>
    </div>
  );
}

export default App;
