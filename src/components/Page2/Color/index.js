import { Component } from "react";
import styles from "./Color.module.scss";

export class Color extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className={styles.color}>
        <h1>COLOR:</h1>
        {color.map(({ id, color }) => (
          <button key={id} className={styles[color]}></button>
        ))}
      </div>
    );
  }
}
