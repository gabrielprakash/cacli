import { React, Component } from "react";
import "./App.css";
import ResultPanel from "./ResultPanel";
import KeyContainer from "./KeyContainer";
import calculate from "./calci";

export default class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };


  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <ResultPanel value={this.state.next || this.state.total || "0"} operation={this.state.next || this.state.total || "0"} />
        <KeyContainer clickHandler={this.handleClick} />
      </div>
    );
  }
}
