import { Card } from "../";
import Cart from "../../components/Cart";
import BtnContainer from "../../components/BtnContainer";
import { text, color, size } from "../../assets/data/data";

const Page2 = () => {
  return (
    <div>
      <Cart />
      {text.map((el, index) => {
        return <Card text={el} color={color[index]} size={size[index]} />;
      })}
      <BtnContainer />
    </div>
  );
};

export default Page2;
