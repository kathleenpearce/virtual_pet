import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import DeliverSvg from './deliver_svg.jsx'

class Creature extends Component {
  render() {
    return(
      <div className="creature">
        <div className="body">
          <DeliverSvg fileName="body" color="rgb(250, 250, 250)" />
        </div>
        <div className="eyes">
          <DeliverSvg fileName="eye2" color="rgb(255, 150, 150)" />
        </div>
        <div className="ears">
          <DeliverSvg fileName="ear3" color="rgb(150, 250, 250)" size="30%" />
        </div>
        <div className="feet">
          <DeliverSvg fileName="feet1" />
        </div>
        <div className="pattern">
          <DeliverSvg fileName="pattern3" color="rgb(150, 175, 250)" />
        </div>
        <div className="mouth">
          <DeliverSvg fileName="mouth1" />
        </div>
        <div className="nose">
          <DeliverSvg fileName="nose3" />
        </div>
        <div className="freckles">
          <DeliverSvg fileName="freckles" />
        </div>
        <div className="bodyOutline">
          <DeliverSvg fileName="bodyOutline" />
        </div>
      </div>
    )
  }
}

export default Creature