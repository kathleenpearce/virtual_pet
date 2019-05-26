import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import DeliverSvg from './Deliver_svg.jsx'

class Creature extends Component {
  render() {
    return(
      <div className="creature">
        <div className="body">
          <DeliverSvg fileName="body" color={"rgb(" + this.props.petStatus.body_color_gene_red + ", " + this.props.petStatus.body_color_gene_green + ", " + this.props.petStatus.body_color_gene_blue + ")"} />
        </div>
        <div className="eyes">
          <DeliverSvg fileName={"eye" + this.props.petStatus.eye_type_gene} color={"rgb(" + this.props.petStatus.eye_color_gene_red + ", " + this.props.petStatus.eye_color_gene_green + ", " + this.props.petStatus.eye_color_gene_blue + ")"} />
        </div>
        <div className="ears">
          <DeliverSvg fileName={"ear" + this.props.petStatus.ear_type_gene} color={"rgb(" + this.props.petStatus.body_color_gene_red + ", " + this.props.petStatus.body_color_gene_green + ", " + this.props.petStatus.body_color_gene_blue + ")"} size={this.props.petStatus.ear_size_gene / 100 * 40 + "%"} />
        </div>
        <div className="feet">
          <DeliverSvg fileName={"feet" + this.props.petStatus.feet_type_gene} />
        </div>
        <div className="pattern">
          <DeliverSvg fileName={"pattern" + this.props.petStatus.body_pattern_gene} color={"rgb(" + this.props.petStatus.body_pattern_gene_red + ", " + this.props.petStatus.body_pattern_gene_green + ", " + this.props.petStatus.body_pattern_gene_blue + ")"} />
        </div>
        <div className="mouth">
          <DeliverSvg fileName="mouth1" />
        </div>
        <div className="nose">
          <DeliverSvg fileName={"nose" + this.props.petStatus.nose_type_gene} />
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