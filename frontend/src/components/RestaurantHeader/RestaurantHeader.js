import React from "react";
import classNames from "classnames/bind";
import styles from "./RestaurantHeader.scss";
const cx = classNames.bind(styles);

const RestaurantHeader = ({
  backgroundImage,
  logoImage,
  name,
  description,
  tags,
  stars,
  reviews
}) => {
  return (
    <div className={styles.RestaurantHeader}>
      <header>
        <img src={backgroundImage} alt="backgroundImage" />
      </header>
      <div className={styles.headerContents}>
        <div className={styles.floatingCard}>
          <div className={styles.logo}>
            <img src={logoImage} alt="backgroundImage" />
          </div>
          <div className={styles.information}>
            <span className={styles.name}>{name}</span>
            <span className={styles.description}>{description}</span>
            <span className={styles.tags}>{tags}</span>
            <div className={styles.ratings}>
              <span className={styles.stars}>{stars}</span>
              <span className={styles.reviews}>({reviews} 리뷰)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
