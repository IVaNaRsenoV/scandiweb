import { Component } from "react";
import { Link } from "react-router-dom";
import Basket from "../../../../assets/svg/basket";
import styles from "./Right.module.scss";

class Right extends Component {
  render() {
    return (
      <ul className={styles.header}>
        <li>
          <Link to="/cost">
            <span>&#65284;</span>
          </Link>
        </li>
        <li>
          <Basket />
        </li>
      </ul>
    );
  }
}

export default Right;
