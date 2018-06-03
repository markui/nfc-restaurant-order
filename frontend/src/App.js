import React, { Component } from "react";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import data from "./data.json";
import * as api from "lib/api";

class App extends Component {
  state = {
    restaurantData: null,
    restaurantId: null,
    tableId: null,
    cart: []
  };

  handleCartAdd = id => {
    //menu id를 받아와서 Cart에 Add하는 function
    const { cart } = this.state;
    console.log(cart);
    this.setState({
      cart: cart.concat(id)
    });
    console.log(`added ${id} menu to cart!!`);
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
            onCartAdd={this.handleCartAdd}
            cart={this.state.cart}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
