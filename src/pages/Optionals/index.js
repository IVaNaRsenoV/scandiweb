import { Component } from "react";
import { Color, Size, Text } from "../../components";
import styles from "./Optionals.module.scss";

export class Optionals extends Component {
  render() {
    const { text, color, size } = this.props;
    return (
      <div>
        <Text text={text} />
        <Size size={size} />
        <Color color={color} />
      </div>
    );
  }
}
