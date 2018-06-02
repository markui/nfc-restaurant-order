import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./RestaurantMain.scss";
import RestaurantMenuList from "../RestaurantMenuList/RestaurantMenuList";

const RestaurantMain = ({ restaurantId, tableId }) => {
  console.log(restaurantId);
  console.log(tableId);
  return (
    <div className={styles.RestaurantMain}>
      <Switch>
        <Route
          path="/menu/:type"
          render={props => {
            console.log(props);
            return (
              <RestaurantMenuList {...props} restaurantId={restaurantId} />
            );
          }}
        />
        <Redirect to="/menu/main" />
        {/* <Route path="/menu/sides" component={RestaurantMenuList} />
        <Route path="/menu/beverages" component={RestaurantMenuList} />
        <Route path="/menu/etc" component={RestaurantMenuList} /> */}
      </Switch>
    </div>
  );
};

export default RestaurantMain;
