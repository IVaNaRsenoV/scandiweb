import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actionCreators";
import styles from "./Counter.module.scss";

const Counter = ({ counter, inc, dec }) => {
  const count = (func) => {
    return () => func(counter);
  };

  return (
    <div className={styles.counter__container}>
      <button onClick={count(inc)}>+</button>
      <span>{counter}</span>
      <button onClick={count(dec)}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ counter: state.counter });
const mapDispatchToProps = (dispatch) => ({
  inc: (data) => dispatch(increment(data)),
  dec: (data) => dispatch(decrement(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
