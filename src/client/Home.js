import React, { Component } from "react";

import "./Home.css";
import Creature from "./CreatureImg.jsx";
import CreatureCard from "./CreatureCard.jsx";
import CreatureContainer from "./CreatureContainer";
import MateFound from "./MateFound";

export default class Home extends Component {
  state = {
    pet1: null,
    pet2: null
  };

  render() {
    const { pet1, pet2 } = this.state;
    return (
      <div>
        <div className="header-container">
          <div className="header">
            <div className="logo">
              <div className="subscribe">Username</div>
              <br />

              <div className="avatar-img">
                <img src="https://placehold.it/150x80?text=IMAGE" />
              </div>
            </div>
            <div className="new-pet-button-container">
              <a href="#" className="new-pet-button">
                Buy New Pet
              </a>
            </div>
          </div>
        </div>

        <div className="flex-home-page-elements-container">
          {pet1 && pet2 ? (
            <MateFound
              left={pet1}
              right={pet2}
              time={this.props.time}
              onNewBaby={baby => this.props.addNewPet(baby)}
            />
          ) : (
            <CreatureContainer
              petlist={this.props.petlist}
              time={this.props.time}
              editPet={this.props.editPet}
              deletePet={this.props.delete}
              onSelect={pet => {
                if (this.state.pet1 === null) {
                  this.setState({
                    pet1: pet
                  });
                } else if (this.state.pet2 === null) {
                  this.setState({
                    pet2: pet
                  });
                }
              }}
            />
          )}

          <p className="job-card-title">
            <h4>Current Jobs</h4>
          </p>
          <div className="job-menu">
            <div className="job-grid-item">JOB 1</div>
            <div className="job-grid-item">JOB 2</div>
            <div className="job-grid-item">JOB 3</div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-item footer-one" />
        </div>
      </div>
    );
  }
}
