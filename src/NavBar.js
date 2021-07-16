import { transform } from "@babel/core";
import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";


class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "mediumorchid",
    };
    return (
        <nav>
          <NavLink exact to="/"      className='link' activeStyle={activeStyle} > Home </NavLink>
          <NavLink exact to="/eat"   className='link' activeStyle={activeStyle} > Eat </NavLink>
          <NavLink exact to="/drink" className='link' activeStyle={activeStyle} > Drink </NavLink>
        </nav>
    );
  }
}

export default NavBar;