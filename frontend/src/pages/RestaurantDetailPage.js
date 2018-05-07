import React, { Component } from "react";
import RestaurantDetailTemplate from "../components/RestaurantDetailTemplate";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantMain from "../components/RestaurantMain";

class RestaurantDetailPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <RestaurantDetailTemplate>
        <RestaurantHeader
          backgroundImage={data.background_img}
          logoImage={data.logo}
          name={data.name}
          description={data.description}
          tags={data.tags}
          stars={data.stars}
          reviews={data.reviews}
        />
        <RestaurantMain menus={data.menus} />
        {/* background-image */}
        {/* Restaurant Info Card */}
        {/* Restaurant Menu Tab */}
        {/* Restaurant Menu List */}
      </RestaurantDetailTemplate>
    );
  }
}

export default RestaurantDetailPage;
