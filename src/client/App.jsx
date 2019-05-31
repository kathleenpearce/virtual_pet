import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";


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

import { breedNewPet } from "../services";





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

  addNewPet() {
    breedNewPet(this.state.pet1, this.state.pet2, (pet) => {
      this.setState(prev => {
        return {
          petlist: [pet, ...prev.petlist]
        };
      });
      // <Redirect to={`/breed/${this.state.pet1.id}/${this.state.pet2.id}`} />
    })

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
    axios.post(`/api/pets/${pet}/work`, {}).then(response => {
      this.setState(prev => {
        return {};
      });
    });
  }

  returnFromWork(job) {
    axios.post(`/api/jobs/${job}`, {}).then(response => {
      this.setState(prev => {
        return {};
      })
    })
  }

  feed(pet, foodType) {
    console.log( "pet: ", pet, " fed food: ", foodType)
    axios.post(`/api/pets/${pet}/feed/${foodType}`, {}).then(response => {
      this.setState(prev => {
        return {};
      })
    })
  }

  // updates global timer

  currentTime() {
    this.setState({
      time: new Date().getTime() - this.state.latency
    });
  }
  // refreshes the timer every 16 MS
  componentWillMount() {
    setInterval(() => this.currentTime(), 16);
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

  // selectPet()
  // update state pf pet1 and pet2
  breed = (pet) => {

    if (this.state.pet1 === "") {
    this.setState({
      pet1: pet
    });
    } else if (this.state.pet2 === "") {
      let pet1id = this.state.pet1.id;
      let pet2id = pet.id;
      this.setState({
        pet2: pet
      }, this.addNewPet)
      // return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
      <BrowserRouter >
        {/*Delete*/}
       {/* <Route path='*' component={App}/>*/}
      {/*End Delete*/}
        <Navbar />
        <Switch>
        <Route path="/breed/:pet1/:pet2" render={(props) => {
          return (
            <MateFound {...props}

              time={this.state.time}
              onNewBaby={baby => this.addNewPet(baby)}
            />
            )



        }} />
          <Route path="/petprofile/:petid" render={(props) => {
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


          <Route path="/" render={(props) => {
          return (<Home {...props}
          petlist={this.state.petlist}
          time={this.state.time}
          addNewPet={this.addNewPet}
          editPet={this.editPet}
          deletePet={this.deletePet}
          sendToWork={this.sendToWork}
          returnFromWork={this.returnFromWork}
          breed={this.breed}
          feed={this.feed}
          pet1={this.state.pet1}
          pet2={this.state.pet2}


        />); }} />

        </Switch>
       </BrowserRouter>



      </div>
    );
  }
}
