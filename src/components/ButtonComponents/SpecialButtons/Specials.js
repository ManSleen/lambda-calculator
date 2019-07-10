import React, { useState } from "react";
import SpecialButton from "./SpecialButton";

import { specials } from "../../../data";

const Specials = ({ handleInput }) => {
  const [theseSpecials, setTheseSpecials] = useState(specials);

  return (
    <div>
      {theseSpecials.map(special => (
        <SpecialButton
          key={special}
          handleInput={handleInput}
          special={special}
        />
      ))}
    </div>
  );
};

export default Specials;
