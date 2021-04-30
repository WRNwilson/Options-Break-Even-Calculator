import GetPrice from "./app/getPrice";
import "./styles/app.scss";

function App() {
  
  return (
    <div className="underlying">
      <h1 className="h1">Break Even Calculator</h1>
      <p className="p">
        In options trading, the break-even is the price in the underlying at
        which one can choose to exercise the contract without incurring a loss
        (the level in an underlying security when it covers an option's
        premium).
      </p>
      <h3 className="h3">Underlying</h3>
      <span>
        <label className="inputLabel"> Symbol: </label>
        <input className="form" type="form" placeholder="AMD" />
        <label className="inputLabel"> Stock Price: </label>
        <input className="form" type="form" placeholder="81.15" />
        <button className="button" type="button">
          Get Price
        </button>
      </span>

      <div className="option">
        <h3 className="h3">
          Option
          <button className="button" type="button">
            Choose Option
          </button>
        </h3>
        <span>
          <label className="inputLabel"> Buy or Write: </label>
          <select name="option-act" className="buyOrWrite">
            <option value="buy" selected="">
              Buy
            </option>
            <option value="sell">Write</option>
          </select>
          <label className="inputLabel"> Call or Put: </label>
          <select name="option-act" className="callOrPut">
            <option value="call" selected="">
              Call
            </option>
            <option value="put">Put</option>
          </select>
          <label className="inputLabel"> Premium: </label>
          <input className="form" type="form" placeholder="7.13" />
          <label className="inputLabel"> Number of Contracts: </label>

          <input className="form" type="form" placeholder="20" />
          <label className="inputLabel"> x 100 </label>
          <br />
          <br />
        </span>
        <span>
          <label className="inputLabel">Date of Expiration: </label>
          <input className="date_form" type="date" />
          <label className="inputLabel"> Strike Price: $</label>
          <input className="form" type="form" placeholder="80" />
          <label className="inputLabel"> IV (implied volatility): </label>
          <input className="form" type="form" placeholder="45.723" />
        </span>
        <br />
        <br />
        <button className="calculate_button" type="button">
          Calculate
        </button>
      </div>
      <GetPrice />
    </div>
  );
}

export default App;
