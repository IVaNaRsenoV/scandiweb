import { Component } from "react";
import Card from "./Card";
import { data } from "../../../assets/data/data";
import styles from "./Main.module.scss";

class CardContainer extends Component {
  render() {
    return (
      <div className={styles.main__container}>
        <div className={styles.header}>
          <h1>Category Name</h1>
        </div>
        <div className={styles.card__container}>
          {data.map(({ id, image }) => (
            <Card key={id} img={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
