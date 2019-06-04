import React, { Component } from "react";
import "./styles/nav.css";
<link rel="stylesheet" href="odometer-theme-minimal.css" />

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

              <a href="/"><h3>{this.props.user.name}&nbsp; - &nbsp;{money} <img className="coin" src="../../lib/img/coin3.png" /></h3></a>
              <a href="/login"> <h3>Logout</h3></a>
            </div>
          </div>
    );
  }
}
