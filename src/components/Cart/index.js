import { Component } from "react";
import styles from "./Cart.module.scss";

class Cart extends Component {
  render() {
    return (
      <div className={styles.cart__container}>
        <h1 className={styles.cart}>CART</h1>
      </div>
    );
  }
}

export default Cart;
