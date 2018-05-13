import React, { Component } from "react";
import styles from "./RestaurantMenuList.scss";
import RestaurantMenu from "../RestaurantMenu";

class RestaurantMenuList extends Component {
  state = {
    limit: 3
  };

  truncateText = text => {
    return text.slice(0, 32);
  };

  render() {
    console.log(this.props);
    const { match, menus } = this.props;
    console.log(match.params.type);
    console.log(menus);

    const list = menus.map(menu => (
      <RestaurantMenu
        key={menu.id}
        name={menu.name}
        description={menu.description}
        thumbnail={menu.img}
        price={menu.price}
        truncateText={this.truncateText}
      />
    ));
    return (
      <div className={styles.RestaurantMenuList}>
        <span>{match.params.type}</span>
        {list}
      </div>
    );
  }
}

export default RestaurantMenuList;
