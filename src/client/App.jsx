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
import Creature from './CreatureImg.jsx'

export default class App extends Component {
  constructor() {
        super();
        this.state = {
          petlist: [],
          pet1: '',
          pet2: '',
          time: new Date()
        };
      }

  currentTime(){
    this.setState({
      time: new Date()
    })
  }

  componentWillMount(){
    setInterval(() => this.currentTime(),1000)
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
    fetch('/api/getPets')
      .then(res => res.json())
      .then(pets => this.setState({ petlist: pets }))

  }

  render() {
    const { pet1, pet2 } = this.state;
    return (
      <div>
        <div>
          {/*<form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="pet1"
              value={pet1}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="pet2"
              value={pet2}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
           </form>*/}
           <form className='geneTestForm' method='POST' action='/api/breed'>
            <input
              type="text"
              name="pet1"
            />
            <input
              type="text"
              name="pet2"
            />
            <button type="submit">Submit</button>
           </form>
          </div>
        <div className='dynamicPets'>
        {this.state.petlist.map(pet => {
          return (
            <CreatureCard petStatus={pet} time={this.state.time}/>
          )
        })}
        </div>
        {/*<Navbar />

        <PetProfile />


        <Footer />*/}

      </div>
    );
  }
}
