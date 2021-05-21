import React, { Component } from "react";

class SelectOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      side: "",
      type: "",
      quantity: "",
      premium: "",
      strikeP: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
  }

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  clickHandler(event) {
    event.preventDefault(); // stop reloading
    const side = this.state.side;
    const type = this.state.type;

    console.log("symbol on submit: ", side);
    console.log("price on submit: ", type);
    //TODO
  }

  onValueChange(event) {
    this.setState({
      selectedOption1: event.target.value,
      selectedOption2: event.target.value,
    });
  }

  //   formSubmit(event) {
  //     event.preventDefault();
  //     console.log(this.state.selectedOption);
  //   }

  render() {
    console.log("State: ", this.state);

    return (
      <div className="option">
        <form className="form-container">
          <button className="button" type="button">
            Find Option
          </button>
          {/* onClick={clickHandler} */}

          <label className="inputLabel">Side</label>

          <label className="container">
            Buy
            <input
              className="radio-1"
              type="radio"
              value="Buy"
              checked={this.state.selectedOption1 === "Buy"}
              onChange={this.onValueChange}
              name="side"
            />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            Sell
            <input
              className="radio-1"
              type="radio"
              value="Sell"
              checked={this.state.selectedOption1 === "Sell"}
              onChange={this.onValueChange}
              name="side"
            />
            <span className="checkmark"></span>
          </label>

          <label className="inputLabel"> Type </label>

          <label className="container">
            Call
            <input
              className="radio-2"
              type="radio"
              value="Call"
              checked={this.state.selectedOption2 === "Call"}
              onChange={this.onValueChange}
              name="type"
            />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            Put
            <input
              className="radio-2"
              type="radio"
              value="Put"
              checked={this.state.selectedOption2 === "Put"}
              onChange={this.onValueChange}
              name="type"
            />
            <span className="checkmark"></span>
          </label>

          <div className="quantity">
            <label className="inputLabel"> Quantity </label>
            <input
              className="form"
              type="number"
              placeholder="32"
              onChange={this.getValue}
              name="quantity"
              value={this.state.quantity}
            />
          </div>
        </form>

        <div className="strike-expiry">
          <div>
            <label className="inputLabel">Premium</label>
            <input
              className="form"
              type="number"
              placeholder="25.48"
              onChange={this.getValue}
              name="premium"
              value={this.state.premium}
            />
          </div>

          <div>
            <label className="inputLabel"> Strike Price</label>
            <input
              className="form"
              type="number"
              placeholder="79.98"
              onChange={this.getValue}
              name="strikeP"
              value={this.state.strikeP}
            />
          </div>

          <div>
            <label className="inputLabel">Date of Expiration</label>
            <input className="date_form" type="date" />
          </div>

          {/* <label className="inputLabel"> IV (implied volatility): </label>
              <input className="form" type="number" placeholder="45.723" /> */}
        </div>
      </div>
    );
  }
}
export default SelectOption;
