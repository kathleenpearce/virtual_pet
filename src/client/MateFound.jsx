import React, { Component } from "react";
import "./Home.css";
import CreatureCard from "./CreatureCard";
import CreatureContainer from "./CreatureContainer";
import axios from "axios";

export default class MateFound extends Component {



  breedPets = event => {
    // event.preventDefault();
    const breedData = new FormData(event.target);
    axios
      .post("/api/breed", {
        pet1: this.state.pet1.id,
        pet2: this.state.pet2.id
      })
      .then(response => {
        this.props.onNewBaby(response.data);
      });
  };

  componentDidMount() {

    }

  render() {

    return (
      <div>
        <br />
        <br />
        <div className="breed-first-content">
          <div className="pet-profile-content">
            <div className="pet-profile-creature-card">
              <div className="creature-grid-item">
                <CreatureCard
                  petStatus={this.props.pet1}
                  time={this.props.time}
                />{" "}
              </div>
            </div>
          </div>
          <div className="heart-icon">
            <p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRph-g6gNjVYjR2YHXGOBzEMwMtgIK66y4Rd9kwnOePc4fNFrk"
                width="200"
                height="200"
              />
            </p>
            <br />
            <br />
          </div>
          <div className="pet-profile-content">
            <div className="pet-profile-creature-card">
              <div className="creature-grid-item">
                <CreatureCard
                  petStatus={this.props.pet2}
                  time={this.props.time}
                />
              </div>
            </div>
          </div>
        </div>

          <button className="actual-breed-button" onClick={() => {this.props.addNewPet(this.props.pet1, this.props.pet2)}}>
            Breed
          </button>

      </div>
    );
  }
}
