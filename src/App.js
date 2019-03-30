import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beforeOperand: 0,
      afterOperand: 0,
      displayValue: "0",
      secondValue: false,
      isAddition: false,
      isSubtraction: false,
      isMultiplication: false,
      isDivision: false,
      isDecimal: false,
    }
  }

  

  handleKeypress = (e, val) => {
    if (!isNaN(val)) {
      this.changeDisplay(val);
    }
  }

  changeDisplay = (value) => {
    let displayValueTemp = this.state.displayValue.slice();

    if (value == 0 && displayValueTemp == 0)
      return null;

    displayValueTemp == 0 ? displayValueTemp = value.toString() : displayValueTemp = displayValueTemp + value;
    this.setState({ displayValue: displayValueTemp })
  }

  clearDisplay = () => {
    this.setState({ displayValue: "0" })
  }

  render() {
    return (
      <div className="App">
        <input className="Display" value={this.state.displayValue}></input>

        <div className="Keypad">
          <div> <button className="options" onClick={this.clearDisplay}>CL</button> <button className="options">+/-</button> <button className="options">%</button> <button className="operand">/</button> </div>
          <div> <button className="number" onClick={(e) => this.handleKeypress(e, 7)}>7</button> <button className="number" onClick={(e) => this.handleKeypress(e, 8)}>8</button> <button className="number" onClick={(e) => this.handleKeypress(e, 9)}>9</button> <button className="operand">X</button> </div>
          <div> <button className="number" onClick={(e) => this.handleKeypress(e, 4)}>4</button> <button className="number" onClick={(e) => this.handleKeypress(e, 5)}>5</button> <button className="number" onClick={(e) => this.handleKeypress(e, 6)}>6</button> <button className="operand">-</button> </div>
          <div> <button className="number" onClick={(e) => this.handleKeypress(e, 1)}>1</button> <button className="number" onClick={(e) => this.handleKeypress(e, 2)}>2</button> <button className="number" onClick={(e) => this.handleKeypress(e, 3)}>3</button> <button className="operand">+</button> </div>
          <div> <button className="long-button number" onClick={(e) => this.handleKeypress(e, 0)}>0</button> <button className="number" onClick={(e) => this.handleKeypress(e, ".")}>.</button> <button className="operand">=</button> </div>
        </div>
      </div>
    );
  }
}

export default App;