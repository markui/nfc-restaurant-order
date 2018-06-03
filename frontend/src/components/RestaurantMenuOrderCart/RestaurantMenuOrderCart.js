import React, { Component } from "react";
import styles from "./RestaurantMenuOrderCart.scss";

class RestaurantMenuOrderCart extends Component {
  render() {
    return (
      <div className={styles.RestaurantMenuOrderCart}>
        <span className={styles.orderText}>주문하기</span>
        <span className={styles.quantityText}>장바구니: 4</span>
      </div>
    );
  }
}

export default RestaurantMenuOrderCart;
