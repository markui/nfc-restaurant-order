import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./RestaurantMain.scss";
import RestaurantMenuList from "../RestaurantMenuList/RestaurantMenuList";
import Navigation from "../Navigation/Navigation";

const RestaurantMain = ({ menus }) => {
  return (
    <div className={styles.RestaurantMain}>
      <Navigation />
      <Switch>
        <Route
          path="/menu/:type"
          render={props => {
            return <RestaurantMenuList {...props} menus={menus} />;
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
