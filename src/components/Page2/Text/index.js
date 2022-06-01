import { Component } from "react";
import styles from "./Text.module.scss";

export class Text extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className={styles.text__container}>
        <h1>{text.stateManager}</h1>
        <h2>{text.glasses}</h2>
        <h3>{text.price}</h3>
      </div>
    );
  }
}
