import React, { Component } from "react";
import "./styles/nav.css";

export default class Navbar extends Component {

  render() {

    let gold = null
    let user = null

    if (this.props.user) {
      gold = this.props.user.gold
      user = this.props.user.name
    }


    const money  = Number(gold).toLocaleString()


    return (
          <div className="menu-container">
            <a href="/" className="selection">Selection</a>
            <div className="nav-links">
              <a href="/"><h3>{user} - {money}G</h3></a>
              <a href="/browseusers"><h3>Browse Users</h3></a>
              <a href="/login"> <h3>Logout</h3></a>
            </div>
          </div>
    );
  }
}
