import React, { useState } from "react";
import "./styles/app.scss";
import Calculate from "./app/calculate";
import SelectUnderlying from "./app/selectUnderlying";
import SelectOption from "./app/selectOption";

function App() {
  const [price, setPrice] = useState("");

  return (
    <div className="calc">
      <div>
        <h1 className="h1">Break Even Calculator</h1>
        <p className="p">
          In options trading, the break-even is the price in the underlying at
          which one can choose to exercise the contract without incurring a loss
          (the level in an underlying security when it covers an option's
          premium).
        </p>
      </div>

      <h3 className="h3">Select Underlying</h3>
      <SelectUnderlying />

      <h3 className="h3">Select Option</h3>
      <SelectOption />

      <Calculate />
    </div>
  );
}

export default App;
