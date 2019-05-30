import React, { Component } from "react";

import "./Home.css";
import "./creatureCard.css"

class HoverOver extends Component {
  render() {
    return (

      <div className="breed-work-feed">
          <div className="breed-button-container">
            <button
              className="breed-button"
              onClick={() => this.props.onSelect(this.props.petStatus)}
            >
              Breed this pet
            </button><p></p>

            <button
              className="breed-button"
              value={this.props.pet}
              onClick={() => {
                this.props.sendToWork(this.props.petStatus.id);
                window.location.reload();
              }}
            >
              Send to Work
            </button><p></p>
            <button className="breed-button">Feed</button>

            <div></div>
          </div>
        </div>
    )
  }
}

export default HoverOver;