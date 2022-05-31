import styles from "./Text.module.scss";

export const Text = ({ text }) => {
  return (
    <div className={styles.text__container}>
      <h1>{text.stateManager}</h1>
      <h2>{text.glasses}</h2>
      <h3>{text.price}</h3>
    </div>
  );
};
