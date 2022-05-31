import { text } from "../../assets/data/data";
import styles from "./Text.module.scss";

export const Text = () => {
  return (
    <div className={styles.text__container}>
      <h1>{text[0].stateManager}</h1>
      <h2>{text[0].glasses}</h2>
      <h3>{text[0].price}</h3>
    </div>
  );
};
