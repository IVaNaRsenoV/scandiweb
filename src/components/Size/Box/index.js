import { size } from "../../../assets/data/data";
import styles from "./Box.module.scss";

const Test = ({ size, id }) => {
  return (
    <div className={styles.span}>
      <span key={id + 2}>{size}</span>
    </div>
  );
};

const Label = ({ id, size }) => {
  return (
    <label key={id + 1} for={id} className={styles.label}>
      <input type="checkbox" id={id} className={styles.checkbox} />
      <Test size={size} id={id} />
    </label>
  );
};

export const Box = () => {
  return (
    <div className={styles.box__container}>
      {size.map(({ id, size }) => (
        <div className={styles.box__container}>
          <Label id={id} size={size} />
        </div>
      ))}
    </div>
  );
};
