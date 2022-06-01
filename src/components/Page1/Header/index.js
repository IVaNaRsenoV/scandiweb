import { Component } from "react";
import Right from "./Right";
import Left from "./Left";
import styles from "./Common.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header__container}>
        <Left />
        <Right />
      </div>
    );
  }
}

export default Header;
