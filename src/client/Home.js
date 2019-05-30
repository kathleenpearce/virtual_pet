import React, { Component } from "react";

import "./Home.css";
import Creature from "./CreatureImg.jsx";
import CreatureCard from "./CreatureCard.jsx";
import CreatureContainer from "./CreatureContainer";
import MateFound from "./MateFound";
import CurrentJobs from "./CurrentJobs.js";

export default class Home extends Component {
  state = {
    pet1: null, //state holds pets to be bred together
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
          <div className="page_test">
            <div className="jobsListTest">
              <p className="job-card-title">
                <h4>Current Jobs</h4>
              </p>
              <div className="job-menu">
                <CurrentJobs time={this.props.time} returnFromWork={this.props.returnFromWork}/>
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
                  deletePet={this.props.deletePet}
                  sendToWork={this.props.sendToWork}
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

            </div>
          </div>
        <div className="footer">
          <div className="footer-item footer-one" />
        </div>
      </div>
    );
  }
}
