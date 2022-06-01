import { Component } from "react";
import styles from "./BtnContainer.module.scss";

const data = [
  {
    id: 1,
    leftText: "Tax 21%",
    rightText: "$42.00",
  },
  {
    id: 2,
    leftText: "Quantity",
    rightText: "3",
  },
  {
    id: 3,
    leftText: "Total",
    rightText: "$200.000",
  },
];

class BtnContainer extends Component {
  render() {
    return (
      <div className={styles.button__container}>
        <div className={styles.button__card}>
          {data.map(({ id, leftText, rightText }) => (
            <div className={styles.card}>
              <span key={id}>{leftText}:</span>
              <h3 key={id + 1}>{rightText}</h3>
            </div>
          ))}
          <button>ORDER</button>
        </div>
      </div>
    );
  }
}

export default BtnContainer;
