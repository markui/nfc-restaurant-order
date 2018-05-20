import React, { Component } from "react";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import data from "./data.json";

class App extends Component {
  render() {
    return (
      <div>
        <RestaurantDetailPage data={data} />
      </div>
    );
  }

  componentDidMount() {
    // 여기에서 `/restaurants/1`로 레스토랑 상세 정보 API 요청
    // 도착한 정보는 RestaurantHeader로 전달됨
  }
}

export default App;
