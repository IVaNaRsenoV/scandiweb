import { Component } from "react";
import Page1 from "./pages/1/Page1";
import Page2 from "./pages/2/Page2";
import Page3 from "./pages/3/Page3";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./components/Page1/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/cost" element={<Page2 />} />
          <Route path="/detail" element={<Page3 />} />
        </Routes>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default App;
