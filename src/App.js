import GetPrice from "./app/getPrice";
import "./styles/app.scss";

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
      <div className="option">
        <form class="form-container">
          <button className="button" type="button">
            Find Option
          </button>

          <div className="side">
            <label className="inputLabel"> Side </label>

            <div className="radio-item">
              <input className="radio-1" type="radio" />
              <label>Buy </label>
            </div>

            <div className="radio-item">
              <input className="radio-1" type="radio" />
              <label>Sell </label>
            </div>
          </div>

          <div className="type">
            <label className="inputLabel"> Type </label>

            <div className="radio-item">
              <input className="radio-2" type="radio" />
              <label>Call </label>
            </div>

            <div className="radio-item">
              <input className="radio-2" type="radio" />
              <label>Put </label>
            </div>
          </div>

          <div className="quantity">
            <label className="inputLabel"> Quantity </label>
            <input className="form" type="text" placeholder="32" />
          </div>
        </form>

        <div className="strike-expiry">
          <div>
            <label className="inputLabel"> Strike Price</label>
            <input className="form" type="form" placeholder="79.98" />
          </div>

          <div>
            <label className="inputLabel">Date of Expiration</label>
            <input className="date_form" type="date" />
          </div>

          {/* <label className="inputLabel"> IV (implied volatility): </label>
          <input className="form" type="form" placeholder="45.723" /> */}
        </div>
      </div>
      <div>
        <button className="calculate_button" type="button">
          Calculate
        </button>
      </div>
      <GetPrice />
    </div>
  );
}

export default App;
