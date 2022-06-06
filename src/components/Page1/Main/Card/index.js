import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { transferPathPicture } from "../../../../redux/actionCreators";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    const { img, setSrc } = this.props;
    return (
      <div className={styles.card}>
        <Link to="/detail">
          <img
            src={img}
            onClick={() => {
              setSrc(`${img}`);
            }}
          />
        </Link>
        <br />
        <div>
          <p>Apollo Running Short</p>
          <p>&#65284;50.00</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.src,
});

const mapDispatchToProps = (dispatch) => ({
  setSrc: (src) => dispatch(transferPathPicture(src)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
