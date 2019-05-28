import React, { Component } from 'react';
import axios from 'axios';

import './app.css';
import './creature.css'
import './creatureCard.css'

import ReactImage from './react.png';
import CreatureCard from './CreatureCard.jsx'
import Home from './Home';
import Navbar from './Navbar';
import PetProfile from './PetProfile';
import BrowseUsers from './BrowseUsers'
import Login from './Login'
import BreedFirst from './BreedFirst'
import Footer from './Footer'
import MateFound from './MateFound'
import SelectMate from './SelectMate'
import Feed from './Feed'
import MateChosen from './MateChosen'
import Creature from './CreatureImg.jsx'

export default class App extends Component {
  constructor() {
        super();
        this.state = {
          petlist: [],
          pet1: '',
          pet2: '',
          startTime: new Date().getTime(),
          time: new Date().getTime(),
          trueTime: new Date().getTime()
        };
      }

  currentTime(){
    this.setState({
      time: this.state.trueTime + new Date().getTime() - this.state.startTime
    })
  }

  componentWillMount(){
    setInterval(() => this.currentTime(),1000)
  }

  componentDidMount() {
    fetch('/api/getPets')
      .then(res => res.json())
      .then(pets => this.setState({ petlist: pets.pets.reverse() }))
      .then(serverTime => this.setState({ trueTime: serverTime.refrenceTime }))

  }

  render() {
    const { pet1, pet2 } = this.state;
    return (
      <div>

        <div>
           <form className='geneTestForm' method='POST' action='/api/breed'>
            <input
              type="text"
              name="pet1"
            />
            <input
              type="text"
              name="pet2"
            />
            <button type="submit" >Submit</button>
           </form>
           <br/>
           <form className='jobsTestForm' method='POST' action='/api/jobs'>
            <input
              type="text"
              name="pet"
            />
            <input
              type="text"
              name="job_type"
            />
            <button type="submit" >Send To Work</button>
           </form>
          </div>
        <div className='dynamicPets'>
        {this.state.petlist.map(pet => {
          return (
            <CreatureCard petStatus={pet} time={this.state.time}/>
          )
        })}
        </div>


      </div>
    );
  }
}
