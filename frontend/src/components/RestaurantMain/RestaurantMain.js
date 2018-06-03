import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./RestaurantMain.scss";
import RestaurantMenuList from "../RestaurantMenuList/RestaurantMenuList";

const RestaurantMain = ({ restaurantId, tableId, onCartAdd }) => {
  return (
    <div className={styles.RestaurantMain}>
      <Switch>
        <Route
          path="/menu/:type"
          render={props => {
            return (
              <RestaurantMenuList
                {...props}
                restaurantId={restaurantId}
                onCartAdd={onCartAdd}
              />
            );
          }}
        />
        <Redirect to="/menu/main" />
      </Switch>
    </div>
  );
};

export default RestaurantMain;
