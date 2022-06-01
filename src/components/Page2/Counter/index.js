import React, { Component } from "react";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  inc = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  dec = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const { inc, dec } = this.props;
    return (
      <div className={styles.counter__container}>
        <button onClick={this.inc}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Counter;
