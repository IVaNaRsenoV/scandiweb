import { Component } from "react";
import Page1 from "./pages/1/Page1";
import Page2 from "./pages/2/Page2";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./components/Page1/Header";
import Basket from "./assets/svg/basket";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/cost" element={<Page2 />} />
        </Routes>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default App;
