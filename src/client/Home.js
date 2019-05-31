import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";


import "./Home.css";
import Creature from "./CreatureImg.jsx";
import CreatureCard from "./CreatureCard.jsx";
import CreatureContainer from "./CreatureContainer";
import MateFound from "./MateFound";
import CurrentJobs from "./CurrentJobs.js";

class Home extends Component {

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header">
            <div className="user-name-container"><div className="logo">
              <div className="username">Username</div></div>


              <div className="avatar-img">
                <img src="https://placehold.it/150x80?text=IMAGE" />
              </div>
            </div>
            <div className="new-pet-button-container">
              <a href="/buynewpet" className="new-pet-button">
                Buy New Pet
              </a>
            </div>
          </div>
        </div>
        <div className="flex-home-page-elements-container">


            <CreatureContainer
              petlist={this.props.petlist}
              time={this.props.time}
              editPet={this.props.editPet}
              deletePet={this.props.deletePet}
              sendToWork={this.props.sendToWork}
              feed={this.props.feed}
              onSelect={this.props.breed}
            />

          <div className="current-job-container">
          <div className="job-card-title">
            <h4>Current Jobs</h4>
          </div>
          <div className="job-menu">
            <CurrentJobs time={this.props.time} returnFromWork={this.props.returnFromWork} />

          </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-item footer-one" />
        </div>
      </div>
    );
  }
}

export default withRouter(Home)