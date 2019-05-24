import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import DeliverSvg from './deliver_svg.jsx'

class Creature extends Component {
  render() {
    return(
      <div className="creature">
        <div className="body">
          <DeliverSvg fileName="body" color="aqua" />
        </div>
        <div className="eyes">
          <DeliverSvg fileName="eye3" color="purple" />
        </div>
        <div className="ears">
          <DeliverSvg fileName="ear1" color="brown" size="30%" />
        </div>
      </div>
    )
  }
}

export default Creature