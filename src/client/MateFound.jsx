import React, { Component } from "react";
import "./Home.css";
import CreatureCard from "./CreatureCard";
import CreatureContainer from "./CreatureContainer";
import axios from "axios";

export default class MateFound extends Component {

  state = { loaded: false };

  breedPets = event => {
    // event.preventDefault();
    const breedData = new FormData(event.target);

    // fetch("/api/breed", {
    //   method: "POST",
    //   body: breedData
    // });
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
      fetch("/api/getPets/"+this.props.match.params.pet1)
      .then(res => res.json())
      .then(pet1 => {
        fetch("/api/getPets/"+this.props.match.params.pet2)
        .then(res => res.json())
        .then(pet2 => {
          this.setState({
            pet1: pet1,
            pet2: pet2,
            loaded: true,
          });
        });
      });
    }

  render() {
    if (!this.state.loaded) {
      return <div> Loading... </div>
    }
    return (
      <div>
        <br />
        <br />
        <div className="breed-first-content">
          <div className="pet-profile-content">
            <div className="pet-profile-creature-card">
              <div className="creature-grid-item">
                <CreatureCard
                  petStatus={this.state.pet1}
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
                  petStatus={this.state.pet2}
                  time={this.props.time}
                />
              </div>
            </div>
          </div>
        </div>
        <a href="/">
          <button className="button" onClick={this.breedPets}>
            Breed
          </button>
        </a>
      </div>
    );
  }
}
