import React, { Component } from "react";

import "./Home.css";
import CreatureCard from "./CreatureCard";

export default class CreatureContainer extends Component {
  render() {
    return (
      <div className="title-align">
        <p className="creature-card-title">
          <br />
          <div className="your-pets-title">
            <h4>Your Pets</h4>
          </div>
        </p>
        <div className="creature-card-container" />
        <div className="creature-menu">
          {this.props.petlist.map(pet => {
            return (
              <CreatureCard
                className="creature-grid-item"
                petStatus={pet}
                time={this.props.time}
                onSelect={this.props.onSelect}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
