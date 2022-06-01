import { Component } from "react";
import Counter from "../../components/Counter";
import Slider from "../../components/Slider";
import { data } from "../../assets/data/data";
import styles from "./Slider.module.scss";

export class SliderContainer extends Component {
  render() {
    return (
      <div className={styles.slider__container}>
        <Counter />
        <Slider slides={data} />
      </div>
    );
  }
}
