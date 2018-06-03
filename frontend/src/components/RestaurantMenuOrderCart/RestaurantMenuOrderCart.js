import React, { Component } from "react";
import styles from "./RestaurantMenuOrderCart.scss";

class RestaurantMenuOrderCart extends Component {
  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return null;
    } else {
      return (
        <div className={styles.RestaurantMenuOrderCart}>
          <span className={styles.orderText}>주문하기</span>
          <span className={styles.quantityText}>장바구니: {cart.length}</span>
        </div>
      );
    }
  }
}

export default RestaurantMenuOrderCart;
