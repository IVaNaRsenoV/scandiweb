import { Color, Size, Text } from "../../components";
import styles from "./Optionals.module.scss";

export const Optionals = ({ text, color, size }) => {
  return (
    <div>
      <Text text={text} />
      <Size size={size} />
      <Color color={color} />
    </div>
  );
};
