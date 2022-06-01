import React, { Component } from "react";
import { Optionals, SliderContainer } from "../";
import styles from "./Card.module.scss";

export class Card extends Component {
  render() {
    const { text, color, size } = this.props;
    return (
      <div className={styles.card}>
        <Optionals text={text} color={color} size={size} />
        <SliderContainer />
      </div>
    );
  }
}
