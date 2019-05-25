import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import DeliverSvg from './deliver_svg.jsx'

class Creature extends Component {
  render() {
    return(
      <div className="creature">
        <div className="body">
          <DeliverSvg fileName="body" color="lightblue" />
        </div>
        <div className="eyes">
          <DeliverSvg fileName="eye3" color="blue" />
        </div>
        <div className="ears">
          <DeliverSvg fileName="ear3" color="brown" size="20%" />
        </div>
        <div className="feet">
          <DeliverSvg fileName="feet1" />
        </div>
        <div className="pattern">
          <DeliverSvg fileName="pattern2" color="darkgreed" />
        </div>
        <div className="mouth">
          <DeliverSvg fileName="mouth1" />
        </div>
        <div className="nose">
          <DeliverSvg fileName="nose1" />
        </div>
        <div className="freckles">
          <DeliverSvg fileName="freckles" />
        </div>
      </div>
    )
  }
}

export default Creature