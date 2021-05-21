import React, { Component, useState } from "react";

class SelectUnderlying extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      symbol: "",
      price: "",
    };
  }

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  clickHandler = (event) => {
    event.preventDefault(); // stop reloading
    const symbol = this.state.symbol;
    const price = this.state.price;

    console.log("symbol on submit: ", symbol);
    console.log("price on submit: ", price);
    //TODO
  };

  render() {
    console.log("State: ", this.state);

    return (
      <div className="underlying">
        <div>
          <label className="inputLabel"> Symbol </label>
          <input
            className="form"
            type="text"
            placeholder="AMD"
            onChange={this.getValue}
            name="symbol"
            value={this.state.symbol}
          />
        </div>

        <div>
          <label className="inputLabel"> Stock Price </label>
          <input
            className="form"
            type="number"
            placeholder="81.15"
            onChange={this.getValue}
            name="price"
            value={this.state.price}
          />
        </div>

        <button className="button" type="button" onClick={this.clickHandler}>
          Find Price
        </button>
      </div>
    );
  }
}
export default SelectUnderlying;
