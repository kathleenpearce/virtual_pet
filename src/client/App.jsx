import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


import "./app.css";
import "./creature.css";
import "./creatureCard.css";
import "./Home.css";

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
import CurrentJobs from "./CurrentJobs.js";
import BuyNewPet from "./BuyNewPet";
import MateFound from "./MateFound";





export default class App extends Component {
  constructor() {
    super();
    this.state = {
      petlist: [],
      pet1: "",
      pet2: "",
      time: new Date().getTime(),
      latency: 0
    };

    this.editPet = this.editPet.bind(this);
  }

  // takes any new pet and adds it to the petlist

  addNewPet(pet) {
    this.setState(prev => {
      return {
        petlist: [pet, ...prev.petlist]
      };
    });
  }

  // changes name of pet

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

  // changes the owener ID of pet to negative

  deletePet(petid) {
    axios.post(`/api/pets/${petid}/release`).then(response => {
      this.setState(prev => {
        return {};
      });
    });
  }

  // creates a new entery in the jobs table for the petID

  sendToWork(pet) {
    console.log(pet);
    axios.post(`/api/pets/${pet}/work`, {}).then(response => {
      this.setState(prev => {
        return {};
      });
    });
  }

  // updates global timer

  currentTime() {
    this.setState({
      time: new Date().getTime() - this.state.latency
    });
  }
  // refreshes the timer every 16 MS
  componentWillMount() {
    //setInterval(() => this.currentTime(), 100000000);
  }
  // inits the timer, loads all pets that a user has
  componentDidMount() {
    fetch("/api/getPets")
      .then(res => res.json())
      .then(pets => {
        this.setState({
          petlist: pets.pets.reverse(),
          latency: new Date().getTime() - pets.refrenceTime
        });
      });
  }

  render() {
    return (
      <div>
      <BrowserRouter >
        <Navbar />
        <Switch>
          <Route path="/petprofile/:petid" component={(props) => {
            return (<PetProfile {...props}
          time={this.state.time}
          addNewPet={this.addNewPet}
          editPet={this.editPet}
          deletePet={this.deletePet}
          sendToWork={this.sendToWork}

              />
              );
          }}/>
          <Route path="/browseusers" component={BrowseUsers}/>
          <Route path="/login" component={Login}/>
          <Route path="/buynewpet" component={BuyNewPet} />


          <Route path="/" component={() => {
          return (<Home
          petlist={this.state.petlist}
          time={this.state.time}
          addNewPet={this.addNewPet}
          editPet={this.editPet}
          deletePet={this.deletePet}
          sendToWork={this.sendToWork}
        />); }} />

        </Switch>
       </BrowserRouter>
      </div>
    );
  }
}
