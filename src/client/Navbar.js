import React, { Component } from "react";
import "./styles/nav.css";
import Odometer from 'react-odometerjs';
import {Link} from "react-router-dom";



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
            <Link to="/" className="selection">Selection</Link>
            <div className="nav-links">

              <Link to="/"><h3>{user} | </h3><div className='money-counter'><Odometer  value={money} format="(,ddd)" /></div><img className="coin" src="../../lib/img/coin3.png" /></Link>
              <Link to="/login"> <h3>Logout</h3></Link>
            </div>
          </div>
    );
  }
}
