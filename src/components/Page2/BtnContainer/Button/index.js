import React from "react";
import "./Button.scss";

class Button extends React.Component {
  render() {
    const { text } = this.props;
    return <button>{text}</button>;
  }
}

export default Button;
