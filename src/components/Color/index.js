import { color } from "../../assets/data/data";
import styles from "./Color.module.scss";

export const Color = () => {
  return (
    <div className={styles.color}>
      <h1>COLOR:</h1>
      {color.map(({ id, color }) => (
        <button key={id} className={styles[color]}></button>
      ))}
    </div>
  );
};
