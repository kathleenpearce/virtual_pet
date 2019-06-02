import React, { Component } from "react";
import "./Home.css";



export default class BuyNewPet extends Component {
  render() {
    return (
      <div>
      <div className="pet-pic-container">
      <img className="pet-pic-2" src="../../lib/img/new-pet-10.png" />
      <img className="pet-pic-1" src="../../lib/img/new-pet-2.png" />
      <img className="pet-pic-3" src="../../lib/img/new-pet-4.png" />
      <img className="pet-pic" src="../../lib/img/new-pet-5.png" />
      <img className="pet-pic-1" src="../../lib/img/new-pet-6.png" />
      <img className="pet-pic" src="../../lib/img/new-pet-7.png" />

      </div>

      <div className="new-pet-container">

      <div className="buy-info">
      A new pet costs $20,000
      </div>

      <div className="buy-button-container"><a href="/"><button className="new-pet-button">Buy New Pet</button></a></div>

      </div>
      </div>
      )
  }
}