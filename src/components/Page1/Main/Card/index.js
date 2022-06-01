import { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className={styles.card}>
        <img src={img} />
        <br />
        <div>
          <p>Apollo Running Short</p>
          <p>&#65284;50.00</p>
        </div>
      </div>
    );
  }
}

export default Card;
