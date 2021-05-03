import React from "react";

const Calculate = () => {
  return <div>
  
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
            <label className="inputLabel">Premium</label>
            <input className="form" type="form" placeholder="25.48" />
          </div>

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
      <button className="calculate_button" type="button">
          Calculate
        </button>
  </div>;
};

export default Calculate;