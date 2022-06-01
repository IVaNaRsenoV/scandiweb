import { Component } from "react";
import Basket from "../../../../assets/svg/basket";

class Right extends Component {
  render() {
    return (
      <ul>
        <li>
          <span>&#65284;</span>
        </li>
        <li>
          <Basket />
        </li>
      </ul>
    );
  }
}

export default Right;
