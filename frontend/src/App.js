import React, { Component } from "react";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import data from "./data.json";
import * as api from "lib/api";

class App extends Component {
  render() {
    return (
      <div>
        <RestaurantDetailPage data={data} />
      </div>
    );
  }

  getRestaurant = id => {
    api.getRestaurant(id).then(response => {
      console.log(response);
    });
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get("restaurant_id");
    const tableId = urlParams.get("table_id");

    this.getRestaurant(restaurantId);

    this.setState({
      restaurant_id: restaurantId,
      table_id: tableId
    });

    // 여기에서 `/restaurants/1`로 레스토랑 상세 정보 API 요청
    // 도착한 정보는 RestaurantHeader로 전달됨
  }
}

export default App;
