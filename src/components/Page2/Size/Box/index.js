import styles from "./Box.module.scss";
import classnames from "classnames";

const Test = ({ size, id }) => {
  return (
    <div className={styles.span}>
      <span key={id + 2}>{size}</span>
    </div>
  );
};

const Label = ({ size, id }) => {
  return (
    <label key={id + 1} for={id} className={styles.label}>
      <input
        type="checkbox"
        id={id}
        className={classnames([styles.checkbox])}
      />
      <Test size={size} id={id} />
    </label>
  );
};

export const Box = ({ size }) => {
  return (
    <div className={styles.box__container}>
      {size.map(({ id, size }) => (
        <div
          key={id}
          className={classnames([
            styles.box__container,
            styles.box__container__position,
          ])}
        >
          <Label key={id + 1} id={id} size={size} />
        </div>
      ))}
    </div>
  );
};
