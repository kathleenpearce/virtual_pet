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
import Footer from "./Footer";
import Feed from "./Feed";
import Creature from "./CreatureImg.jsx";
import CurrentJobs from "./CurrentJobs.js";
import BuyNewPet from "./BuyNewPet";
import MateFound from "./MateFound";

import { breedNewPet, makeNewJob, endJob, newFeedEvent } from "../services";





export default class App extends Component {
  constructor() {
    super();
    this.state = {
      petlist: [],
      jobList: [],
      pet1: "",
      pet2: "",
      time: new Date().getTime(),
      latency: 0,
      user: []
    };

    this.editPet = this.editPet.bind(this);
    this.sendToWork = this.sendToWork.bind(this);
    this.returnFromWork = this.returnFromWork.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.feed = this.feed.bind(this)
  }


  login = (username) => {
    console.log("user: ", username)
    this.setState({
      user: username
    })


  }

  // takes any new pet and adds it to the petlist

  addNewPet = (pet1, pet2) => {

    breedNewPet(pet1, pet2, (pet) => {
      this.setState(prev => {
        return {
          pet1: "",
          pet2: "",
          petlist: [pet, ...prev.petlist]
        };
      });
    })

  }

//setting pet 1 or pet2
  breed = (pet) => {
    const petAssign = (pet.pet_id ? pet : Object.assign(pet, {pet_id: pet.id}))
    if (this.state.pet1 === "") {

    this.setState({
      pet1: petAssign
    });
    } else if ((this.state.pet2 === "") && (this.state.pet1.pet_id != petAssign.pet_id)) {
      let pet1id = this.state.pet1.pet_id;
      let pet2id = petAssign.pet_id ;
      this.setState({

        pet2: petAssign
      })

      // return <Redirect to='/' />
    } else {
      this.setState({
        pet1: "",
        pet2: ""
      })
    }
  }

  // changes name of pet

  editPet(pet) {
    /* Going to want to make an axios request */
    /* PUT /pets/${pet.id} */
    const petAssign = (pet.pet_id ? pet : Object.assign(pet, {pet_id: pet.id}))
    console.log(pet)
    console.log(petAssign.pet_id)
    axios.put(`/api/pets/${petAssign.pet_id}`, petAssign).then(response => {
      this.setState(prev => {
        const index = prev.petlist.findIndex(item => item.id === petAssign.pet_id);
        return {
          petlist: [
            ...this.state.petlist.slice(0, index),
            petAssign,
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
        const index = prev.petlist.findIndex(item => item.id == petid)
        return {
          petlist: [
            ...this.state.petlist.slice(0, index),
            ...this.state.petlist.slice(index + 1)
          ]
        }
      })
    })
  }
    //   .then(pets => {
    //   const petListUpdate = this.state.petlist.filter(pets => pets.id !== petid)
    //     this.setState({petlist: petListUpdate});
    // });

  // creates a new entery in the jobs table for the petID

  sendToWork = (pet) => {
    console.log("try to send to work: ", pet)
    const petAssign = (pet.pet_id ? pet : Object.assign(pet, {pet_id: pet.id}))
    console.log("try to send to work: ", petAssign)
    makeNewJob (petAssign, (job) => {
      this.setState(prev => {
      const index = prev.petlist.findIndex(item => item.pet_id === job.pet_id);
        return {
          petlist: [
            ...this.state.petlist.slice(0, index),
            job,
            ...this.state.petlist.slice(index + 1)
            ],
          jobList: [job, ...prev.jobList]
        }
      })
    });
  }

  returnFromWork(job) {
    endJob(job, (pet) => {
      this.setState(prev => {
        const index = prev.jobList.findIndex(item => item.id === job.id);
        const petIndex = prev.petlist.findIndex(item => item.pet_id === pet.pet_id)
        return {
          jobList: [
            ...this.state.jobList.slice(0, index),
            ...this.state.jobList.slice(index + 1)
          ],
          petlist: [
            ...this.state.petlist.slice(0, petIndex),
            pet,
            ...this.state.petlist.slice(petIndex + 1)
            ]
        }
      })
    })
  }


  feed(pet, foodType) {
    const petAssign = (pet.pet_id ? pet : Object.assign(pet, {pet_id: pet.id}))
    newFeedEvent(petAssign, foodType, (petUpdate) => {
      this.setState(prev => {
        const petIndex = prev.petlist.findIndex(item => item.id === petAssign.pet_id)
        console.log(petIndex)
        console.log(petUpdate)
        console.log(Object.assign(petAssign, petUpdate).happiness_at_time_last_fed)
        return {
          petlist: [
            ...this.state.petlist.slice(0, petIndex),
            Object.assign(petAssign, petUpdate),
            ...this.state.petlist.slice(petIndex + 1)
            ]
        };
      })
    })
  }

  buyNewPet(user) {
    axios.post(`/api/users/${1}/buypet`, {}).then(response => {
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
    //setInterval(() => this.currentTime(), 32);
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
    fetch('/api/getJobs')
    .then(res => res.json())
    .then(jobs => this.setState({ jobList: jobs.reverse() }))
  }

  // selectPet()
  // update state pf pet1 and pet2


  render() {
    let content = (
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
          buyNewPet={this.buyNewPet}
          pet1={this.state.pet1}
          pet2={this.state.pet2}
          username={this.state.user}
          jobList={this.state.jobList}



        />); }} />


      );
    if (this.state.pet1 != "" && this.state.pet2 != ""){

      content = (
          <MateFound
          petlist={this.state.petlist}
          time={this.state.time}
          addNewPet={this.addNewPet}

          breed={this.breed}
          pet1={this.state.pet1}
          pet2={this.state.pet2}


        />

        );
    }
    return (
      <div>
      <BrowserRouter >
        {/*Delete*/}
       {/* <Route path='*' component={App}/>*/}
      {/*End Delete*/}
        <Navbar />
        <Switch>
          <Route path="/petprofile/:petid" render={(props) => {
            return (<PetProfile {...props}
          time={this.state.time}
          addNewPet={this.addNewPet}
          editPet={this.editPet}
          deletePet={this.deletePet}
          sendToWork={this.sendToWork}
          feed={this.feed}

              />
              );
          }}/>
          <Route path="/browseusers" component={BrowseUsers}/>

          <Route path="/login" render={() => { return <Login login={this.login} /> }} />

          <Route path="/buynewpet" component={BuyNewPet} />
          {content}

        </Switch>
       </BrowserRouter>



      </div>
    );
  }
}
