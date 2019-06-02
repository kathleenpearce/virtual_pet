import React, { Component } from "react";

import "./Home.css";
import "./creatureCard.css"

class HoverOver extends Component {
  render() {
    return (

      <div className="breed-work-feed">
      { this.props.pet1 === '' &&
        <div className="breed-button-container">
          <button
            className="breed-button"
            onClick={() => this.props.onSelect(this.props.petStatus)}
          >
            Breed this pet
          </button>
          <p></p>

          <button
            className="breed-button"
            value={this.props.pet}
            onClick={() => {
              this.props.sendToWork(this.props.petStatus.pet_id);
            }}
          >
            Send to Work
          </button><p></p>
          <button
            className="breed-button"
            onClick={() => {
              this.props.feed(this.props.petStatus.id, 1)
            }}

          >
            Feed</button>

          <div></div>
        </div>
      }
      { this.props.pet1 != '' &&
        <React.Fragment>
          { this.props.pet1.id === this.props.pet.id &&
            <button
                className="breed-button"
                onClick={() => this.props.onSelect(this.props.petStatus)}
              >
                Cancel breeding
            </button>
          }
          { this.props.pet1.id != this.props.pet.id &&
             <button
                className="breed-button"
                onClick={() => this.props.onSelect(this.props.petStatus)}
              >
                Breed this pet
            </button>
          }
        </React.Fragment>
      }
      </div>
    )
  }
}

export default HoverOver;