import React, {Component} from "react";
import {NavLink} from "react-router-dom";


class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "mediumorchid"
    };
    return (
        <nav>
          <NavLink exact to="/"      activeStyle={activeStyle}> Home </NavLink>
          <NavLink exact to="/eat"   activeStyle={activeStyle}> Eat </NavLink>
          <NavLink exact to="/drink" activeStyle={activeStyle}> Drink </NavLink>
        </nav>
    );
  }
}

export default NavBar;