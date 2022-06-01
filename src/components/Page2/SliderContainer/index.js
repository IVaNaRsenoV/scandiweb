import { Component } from "react";
import Counter from "../Counter";
import Slider from "../Slider";
import { data } from "../../../assets/data/data";
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
