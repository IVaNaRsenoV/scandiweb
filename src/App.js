import { Component } from "react";
import Page1 from "./pages/1/Page1";
import Page2 from "./pages/2/Page2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Page1 />
        <Page2 />
      </div>
    );
  }
}

export default App;
