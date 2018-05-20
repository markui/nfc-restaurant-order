import React, { Component } from "react";
import styles from "./RestaurantMenuList.scss";
import RestaurantMenu from "../RestaurantMenu";
import { ThreeBounce } from "better-react-spinkit";
import * as api from "lib/api";

class RestaurantMenuList extends Component {
  state = {
    limit: 3,
    loading: false,
    menus: this.props.menus
  };

  getAPOD = date => {
    api.getAPOD(date).then(response => {
      console.log(response);
    });
  };

  truncateText = text => {
    return text.slice(0, 32);
  };

  getMenus = () => {
    if (this.state.loading) {
      return;
    }
    this.setState({
      loading: true
    });
    // menu API 요청하기
    console.log("fetching more menus...");
    const newMenus = this.state.menus.concat([
      {
        id: 6,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYQfeXdsxkByLvOj_RJX_beh5tNEMAGr60-O5tYAAEd5A2Ijv6g",
        name: "Alligator",
        description:
          "5가지 과일 시럽과 아이스크림을 곁들인 버터핑거 팬케익스 대표 디저트",
        price: 44000
      },
      {
        id: 7,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYQfeXdsxkByLvOj_RJX_beh5tNEMAGr60-O5tYAAEd5A2Ijv6g",
        name: "Alligator",
        description:
          "5가지 과일 시럽과 아이스크림을 곁들인 버터핑거 팬케익스 대표 디저트",
        price: 44000
      },
      {
        id: 8,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYQfeXdsxkByLvOj_RJX_beh5tNEMAGr60-O5tYAAEd5A2Ijv6g",
        name: "Alligator",
        description:
          "5가지 과일 시럽과 아이스크림을 곁들인 버터핑거 팬케익스 대표 디저트",
        price: 44000
      }
    ]);
    this.setState({
      menus: newMenus,
      loading: false
    });
  };

  handleScroll = e => {
    const scrollbox = e.target;
    const scrolledToBottom =
      scrollbox.offsetHeight + scrollbox.scrollTop === scrollbox.scrollHeight;
    if (scrolledToBottom) {
      console.log("scroll reached the end!");
      this.getMenus();
    }
  };

  // if (main.offsetHeight + main.scrollTop === main.scrollHeight) {
  //   // 메뉴 더 불러오기
  // }

  componentDidUpdate() {
    console.log("api call for certain menu type");
  }

  render() {
    console.log(this.state.menus[0]);
    console.log(this.props);
    const { match } = this.props;
    const { menus } = this.state;
    //match.params.type은 뒤의 etc 와 같은 param을 지칭
    console.log(match.params.type);
    console.log(menus);

    const list = menus.map(menu => (
      <RestaurantMenu
        key={menu.id}
        name={menu.name}
        description={menu.description}
        thumbnail={menu.img}
        price={menu.price}
        truncateText={this.truncateText}
      />
    ));
    if (match.params.type === "main") {
      return (
        <div
          className={styles.RestaurantMenuList}
          ref={ref => {
            this.scrollbox = ref;
          }}
        >
          <span>{match.params.type}</span>
          {list}
          {this.state.loading && <ThreeBounce color="black" size={15} />}
        </div>
      );
    } else if (match.params.type === "etc") {
      return (
        <div>
          <span>Menu ETC list</span>
        </div>
      );
    } else {
      return (
        <div className={styles.RestaurantMenuList}>
          <span>{match.params.type}</span>
          {list}
        </div>
      );
    }
  }

  componentDidMount() {
    console.log("api call for certain menu type");
    this.getAPOD("2015-08-08");
    this.scrollbox.addEventListener("scroll", this.handleScroll);
  }
}

export default RestaurantMenuList;
