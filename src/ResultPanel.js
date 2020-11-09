import React from "react";
import PropTypes from "prop-types";

import "./ResultPanel.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operation:PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div className="operation" >{this.props.operation}</div>
        <div className="value" >{this.props.value}</div>
      </div>
    );
  }
}
