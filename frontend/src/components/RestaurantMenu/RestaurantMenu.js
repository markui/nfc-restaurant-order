import React from "react";
import styles from "./RestaurantMenu.scss";

const RestaurantMenu = ({
  name,
  description,
  price,
  thumbnail_image,
  truncateText
}) => {
  return (
    <div className={styles.RestaurantMenu}>
      <div className={styles.floatingCard}>
        <div className={styles.menuThumbnail}>
          <img src={thumbnail_image} alt="menu-thumbnail" />
        </div>
        <div className={styles.menuContext}>
          <span className={styles.name}>{name}</span>
          <div className={styles.description}>
            <span className={styles.text}>{truncateText(description)}</span>
            <a className={styles.seeMore}>...더보기</a>
          </div>
          <span className={styles.price}>{price}원</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
