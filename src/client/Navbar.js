import React, { Component } from "react";
import "./styles/nav.css";

export default class Navbar extends Component {

  render() {

    const money  = Number(this.props.user.gold).toLocaleString()

    return (
          <div className="menu-container">
            <a href="/" className="selection">Selection</a>
            <div className="nav-links">
              <a href="/"><h3>{this.props.user.name} - {money}G</h3></a>
              <a href="/browseusers"><h3>Browse Users</h3></a>
              <a href="/login"> <h3>Logout</h3></a>
            </div>
          </div>
    );
  }
}
