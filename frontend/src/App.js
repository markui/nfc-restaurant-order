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
}

export default App;
