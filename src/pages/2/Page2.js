import { Card } from "../../components/Page2/Card";
import Cart from "../../components/Page2/Cart";
import BtnContainer from "../../components/Page2/BtnContainer";
import { text, color, size } from "../../assets/data/data";

const Page2 = () => {
  return (
    <div>
      <Cart />
      {text.map((el, index) => {
        return (
          <Card text={el} color={color[index]} size={size[index]} key={index} />
        );
      })}
      <BtnContainer />
    </div>
  );
};

export default Page2;
