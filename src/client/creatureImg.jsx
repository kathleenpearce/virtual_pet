import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import DeliverSvg from './Deliver_svg.jsx'

class Creature extends Component {
  render() {
    return(
      <div className="creature">
        <div className="body">
          <DeliverSvg fileName="body" color="rgb(150, 250, 250)" />
        </div>
        <div className="eyes">
          <DeliverSvg fileName="eye3" color="rgb(155, 150, 150)" />
        </div>
        <div className="ears">
          <DeliverSvg fileName="ear1" color="rgb(250, 200, 100)" size="35%" />
        </div>
        <div className="feet">
          <DeliverSvg fileName="feet1" />
        </div>
        <div className="pattern">
          <DeliverSvg fileName="pattern2" color="rgba(100, 200, 200, .4)" />
        </div>
        <div className="mouth">
          <DeliverSvg fileName="mouth1" />
        </div>
        <div className="nose">
          <DeliverSvg fileName="nose2" />
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