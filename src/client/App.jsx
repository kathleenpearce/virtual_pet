import React, { Component } from "react";
import axios from "axios";

import "./app.css";
import "./creature.css";
import "./creatureCard.css";
import "./Home.css";

import ReactImage from "./react.png";
import CreatureCard from "./CreatureCard.jsx";
import Home from "./Home";
import Navbar from "./Navbar";
import PetProfile from "./PetProfile";
import BrowseUsers from "./BrowseUsers";
import Login from "./Login";
import BreedFirst from "./BreedFirst";
import Footer from "./Footer";
import MateFound from "./MateFound";
import SelectMate from "./SelectMate";
import Feed from "./Feed";
import Creature from "./CreatureImg.jsx";
import CreatureContainer from "./CreatureContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      petlist: [],
      pet1: null,
      pet2: null,
      time: new Date()
    };
  }

  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  // onChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   // get our form data out of state
  //   const { pet1, pet2} = this.state;

  //   axios.post('/api/breed', { pet1, pet2})
  //     .then((result) => {
  //       //access the results here....
  //     });
  // }

  componentDidMount() {
    fetch("/api/getPets")
      .then(res => res.json())
      .then(pets => {
        this.setState({ petlist: pets });
      });
  }

  render() {
    const { pet1, pet2 } = this.state;
    return (
      <div>
        <Navbar />

        {pet1 && pet2 ? (
          <MateFound
            left={pet1}
            right={pet2}
            time={this.state.time}
            onNewBaby={baby =>
              this.setState(prev => ({
                petlist: prev.petlist.concat(baby)
              }))
            }
          />
        ) : (
          <CreatureContainer
            petlist={this.state.petlist}
            time={this.state.time}
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
    );
  }
}
