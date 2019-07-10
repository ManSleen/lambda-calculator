import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNum, setFirstNum] = useState(null);
  const [waitingForSecondNum, setWaitingForSecondNum] = useState(false);
  const [operator, setOperator] = useState(null);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const handleInput = (e, num) => {
    if (e.target.value === "C") {
      setDisplay("0");
    } else if (e.target.value === ".") {
      if (!display.includes(".")) {
        setDisplay(display + ".");
        console.log("display: ", display);
      }
    } else {
      let currentNum = display === "0" ? num : display + num;
      setDisplay(currentNum);
    }
  };

  // const evaluateDisplay = () => {
  //   console.log(display);
  // };

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
          <Operators handleInput={handleInput} />
        </div>
      </div>

      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
