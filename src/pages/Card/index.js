import React from "react";
import { Optionals, SliderContainer } from "../";
import styles from "./Card.module.scss";

export const Card = ({ text, color, size }) => {
  return (
    <div className={styles.card}>
      <Optionals text={text} color={color} size={size} />
      <SliderContainer />
    </div>
  );
};
