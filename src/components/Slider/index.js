import React, { useState } from "react";
import { data } from "../../assets/data/data";
import styles from "./Slider.module.scss";

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) return null;

  return (
    <section className={styles.slider}>
      {data.map(({ id, image }, index) => (
        <div key={id + 1} className={styles.img__container}>
          {current === index && <img src={image} key={id} />}
        </div>
      ))}
      <div className={styles.arrows}>
        <button onClick={prevSlide}>&#706;</button>
        <button onClick={nextSlide}>&#62;</button>
      </div>
    </section>
  );
};
