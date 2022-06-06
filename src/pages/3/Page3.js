import { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/Page2/BtnContainer/Button";
import { Optionals } from "../../components/Page2/Optionals";
import { size } from "../../assets/data/data";
import { color } from "../../assets/data/data";
import { text } from "../../assets/data/data";
import styles from "./3.module.scss";

class Page3 extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className={styles.page3__container}>
        <div className={styles.left}>
          <img src={src} />
        </div>
        <div className={styles.right}>
          <Optionals text={text[0]} color={color[0]} size={size[0]} />
          <Button text={"ADD TO CART"} />
          <div className={styles.text__block}>
            <p>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    src: state.src,
  };
};

export default connect(mapStateToProps)(Page3);
