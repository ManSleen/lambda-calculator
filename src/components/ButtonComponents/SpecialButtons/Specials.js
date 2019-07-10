import React, { useState } from "react";
import SpecialButton from "./SpecialButton";

import { specials } from "../../../data";

const Specials = props => {
  const [theseSpecials, setTheseSpecials] = useState(specials);

  return (
    <div>
      {theseSpecials.map(special => (
        <SpecialButton handleInput={props.handleInput} special={special} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
