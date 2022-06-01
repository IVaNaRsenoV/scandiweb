import React, { Component } from "react";
import { Optionals } from "../Optionals";
import { SliderContainer } from "../SliderContainer";
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
