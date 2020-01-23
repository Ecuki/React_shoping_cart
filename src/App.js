import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    avaliableProducts: 7,
    shoppingCart: 1
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
  handleBuy = () => {
    this.setState({
      avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };
  render() {
    const { shoppingCart, avaliableProducts } = this.state;
    const style =
      shoppingCart === 0
        ? {
            opacity: 0.3
          }
        : {};
    return (
      <div className="App-div">
        <button
          className="App-button"
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span style={style}> {shoppingCart} </span>

        <button
          className="App-button"
          disabled={shoppingCart === avaliableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && (
          <button className="App-button" onClick={this.handleBuy}>
            Kup
          </button>
        )}
      </div>
    );
  }
}

export default App;
