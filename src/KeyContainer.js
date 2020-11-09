import {React,Component} from "react";
import PropTypes from "prop-types";
import "./KeyContainer.css";
import Key from "./Key";

export default class KeyPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = KeyName => {
    this.props.clickHandler(KeyName);
  };

  render() {
    return (
      <div className="component-key-panel">
        <div>
          <Key name="AC" clickHandler={this.handleClick} />
          <Key name="C" clickHandler={this.handleClick} />
          <Key name="%" clickHandler={this.handleClick} />
          <Key name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Key name="7" clickHandler={this.handleClick} />
          <Key name="8" clickHandler={this.handleClick} />
          <Key name="9" clickHandler={this.handleClick} />
          <Key name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Key name="4" clickHandler={this.handleClick} />
          <Key name="5" clickHandler={this.handleClick} />
          <Key name="6" clickHandler={this.handleClick} />
          <Key name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Key name="1" clickHandler={this.handleClick} />
          <Key name="2" clickHandler={this.handleClick} />
          <Key name="3" clickHandler={this.handleClick} />
          <Key name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Key name="." clickHandler={this.handleClick} />
          <Key name="0" clickHandler={this.handleClick} />
          <Key name="()" clickHandler={this.handleClick} />
          <Key name="=" clickHandler={this.handleClick} bgorange />
        </div>
      </div>
    );
  }
}
