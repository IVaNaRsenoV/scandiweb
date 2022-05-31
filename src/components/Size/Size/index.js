import React from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import styles from "./Size.module.scss";

export const Size = ({ size }) => {
  return (
    <div className={styles.size}>
      <Text />
      <Box size={size} />
    </div>
  );
};
