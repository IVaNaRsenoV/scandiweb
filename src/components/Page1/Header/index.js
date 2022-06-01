import { Component } from "react";
import Right from "./Right";
import Left from "./Left";
import { Link } from "react-router-dom";
import back from "../../../assets/img/back.png";
import styles from "./Common.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header__container}>
        <Left />
        <Link to="/">
          <span className={styles.arrow}>&#8634;</span>
        </Link>
        <Right />
      </div>
    );
  }
}

export default Header;
