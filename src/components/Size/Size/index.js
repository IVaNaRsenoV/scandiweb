import React, { Component } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import styles from "./Size.module.scss";

export class Size extends Component {
  render() {
    const { size } = this.props;
    return (
      <div className={styles.size}>
        <Text />
        <Box size={size} />
      </div>
    );
  }
}
