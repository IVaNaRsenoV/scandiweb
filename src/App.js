import { Component } from "react";
import { Card } from "./pages";
import Cart from "./components/Cart";
import BtnContainer from "./components/BtnContainer";
import { text, color, size } from "./assets/data/data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Cart />
        {text.map((el, index) => {
          return <Card text={el} color={color[index]} size={size[index]} />;
        })}
        <BtnContainer />
      </div>
    );
  }
}

export default App;
