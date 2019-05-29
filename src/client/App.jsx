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
import SelectMate from "./SelectMate";
import Feed from "./Feed";
import Creature from "./CreatureImg.jsx";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      petlist: [],
      time: new Date()
    };

    this.editPet = this.editPet.bind(this);
  }

  addNewPet(pet) {
    this.setState(prev => {
      return {
        petlist: [pet, ...prev.petlist]
      };
    });
  }

  editPet(pet) {
    /* Going to want to make an axios request */
    /* PUT /pets/${pet.id} */

    axios.put(`/api/pets/${pet.id}`, pet).then(response => {
      this.setState(prev => {
        const index = prev.petlist.findIndex(item => item.id === pet.id);
        return {
          petlist: [
            ...this.state.petlist.slice(0, index),
            pet,
            ...this.state.petlist.slice(index + 1)
          ]
        };
      });
    });
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
    return (
      <div>
        <Navbar />
        <Home
          petlist={this.state.petlist}
          time={this.state.time}
          addNewPet={this.addNewPet}
          editPet={this.editPet}
        />
      </div>
    );
  }
}
