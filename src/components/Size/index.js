import { size } from "../../assets/data/data";
import styles from "./Size.module.scss";

export const Size = () => {
  return (
    <div className={styles.size}>
      <h1>SIZE:</h1>
      {size.map(({ id, size }) => (
        <button key={id}>{size}</button>
      ))}
    </div>
  );
};
