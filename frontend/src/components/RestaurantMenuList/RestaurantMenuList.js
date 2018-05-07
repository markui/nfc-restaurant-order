import React, { Component } from "react";
import styles from "./RestaurantMenuList.scss";

class RestaurantMenuList extends Component {
  render() {
    return (
      <div className={styles.RestaurantMenuList}>
        <span>메뉴1</span>
        <span>메뉴2</span>
        <span>메뉴3</span>
      </div>
    );
  }
}

export default RestaurantMenuList;
