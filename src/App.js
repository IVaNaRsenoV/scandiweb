import { Component } from "react";
import { Card } from "./pages";
import { text, color, size } from "./assets/data/data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        {text.map((el, index) => {
          return <Card text={el} color={color[index]} size={size[index]} />;
        })}
      </>
    );
  }
}

export default App;
