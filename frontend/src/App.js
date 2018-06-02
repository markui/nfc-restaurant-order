import React, { Component } from "react";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import data from "./data.json";
import * as api from "lib/api";

class App extends Component {
  state = {
    restaurantData: null,
    restaurantId: null,
    tableId: null
  };
  getRestaurant = async id => {
    try {
      const response = await api.getRestaurant(id);
      const restaurantData = response.data;
      this.setState({
        restaurantData
      });
    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get("restaurant_id");
    const tableId = urlParams.get("table_id");

    this.getRestaurant(restaurantId);

    this.setState({
      restaurantId: restaurantId,
      tableId: tableId
    });
  }

  render() {
    if (this.state.restaurantData) {
      return (
        <div>
          <RestaurantDetailPage
            data={this.state.restaurantData}
            restaurantId={this.state.restaurantId}
            tableId={this.state.tableId}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
