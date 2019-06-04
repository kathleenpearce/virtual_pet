import React, { Component } from "react";
import "./styles/nav.css";
import Odometer from 'react-odometerjs';


export default class Navbar extends Component {


    componentDidUpdate() {

    }

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

              <a href="/"><h3>{user} | </h3><Odometer value={money} format="(,ddd,ddd)" /><img className="coin" src="../../lib/img/coin3.png" /></a>
              <a href="/login"> <h3>Logout</h3></a>
            </div>
          </div>
    );
  }
}
