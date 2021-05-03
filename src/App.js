import "./styles/app.scss";
import Calculate from "./app/calculate.js";

function App() {
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
      <div className="underlying">
        <div>
          <label className="inputLabel"> Symbol </label>
          <input className="form" type="text" placeholder="AMD" />
        </div>
        <div>
          <label className="inputLabel"> Stock Price </label>
          <input className="form" type="text" placeholder="81.15" />
        </div>

        <button className="button" type="button">
          Find Price
        </button>
      </div>

      <h3 className="h3">Select Option</h3>

      <Calculate />
    </div>
  );
}

export default App;
