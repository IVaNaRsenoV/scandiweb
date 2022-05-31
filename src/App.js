import { Card } from "./pages";
import { text, color, size } from "./assets/data/data";
import "./App.css";

function App() {
  return (
    <>
      {text.map((el, index) => {
        return <Card text={el} color={color[index]} size={size[index]} />;
      })}
    </>
  );
}

export default App;
