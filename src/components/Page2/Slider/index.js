import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Slider.module.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  nextSlide = () => {
    this.setState({
      current:
        this.state.current === this.props.length ? 0 : this.state.current + 1,
    });
  };

  prevSlide = () => {
    this.setState({
      current:
        this.state.current === 0 ? this.props.length : this.state.current - 1,
    });
  };

  render() {
    // console.log(this.props);
    const { slider } = this.props;

    if (!Array.isArray(slider) || this.props.length <= 0) return null;

    return (
      <section className={styles.slider}>
        {slider.map(({ id, image }, index) => (
          <div key={id + 1} className={styles.img__container}>
            {this.state.current === index && <img src={image} key={id} />}
          </div>
        ))}
        <div className={styles.arrows}>
          <button onClick={this.prevSlide}>&#706;</button>
          <button onClick={this.nextSlide}>&#62;</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    slider: state.slides,
    length: state.slides.length - 1,
  };
};

export default connect(mapStateToProps)(Slider);
