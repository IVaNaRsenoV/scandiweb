import Counter from "../../components/Counter";
import { Slider } from "../../components";
import { data } from "../../assets/data/data";
import styles from "./Slider.module.scss";

export const SliderContainer = () => {
  return (
    <div className={styles.slider__container}>
      <Counter />
      <Slider slides={data} />
    </div>
  );
};
