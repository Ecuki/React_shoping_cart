import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    avaliableProducts: 7,
    shoppingCart: 5
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };
  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };
  render() {
    return (
      <div className="App-div">
        <button
          className="App-button"
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          className="App-button"
          disabled={
            this.state.shoppingCart === this.state.avaliableProducts
              ? true
              : false
          }
          onClick={this.handleAddToCart}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
