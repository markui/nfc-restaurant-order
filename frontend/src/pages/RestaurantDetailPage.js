import React, { Component } from "react";
import RestaurantDetailTemplate from "../components/RestaurantDetailTemplate";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantMain from "../components/RestaurantMain";
import Navigation from "../components/Navigation/Navigation";

class RestaurantDetailPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <RestaurantDetailTemplate>
        <RestaurantHeader
          backgroundImage={data.background_image}
          logoImage={data.logo_image}
          name={data.name}
          description={data.description}
          tags={data.tags}
        />
        <Navigation />
        {/* <RestaurantMain menus={data.menus} /> */}
        {/* background-image */}
        {/* Restaurant Info Card */}
        {/* Restaurant Menu Tab */}
        {/* Restaurant Menu List */}
      </RestaurantDetailTemplate>
    );
  }
}

export default RestaurantDetailPage;
