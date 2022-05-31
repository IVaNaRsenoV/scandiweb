import React from "react";
import { Optionals, SliderContainer } from "../";
import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <div className={styles.card}>
      <Optionals />
      <SliderContainer />
    </div>
  );
};
