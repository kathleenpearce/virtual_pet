import React, { Component } from 'react';
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
  state = { petlist: [] };

  componentDidMount() {
    fetch('/api/getPets')
      .then(res => res.json())
      .then(pets => this.setState({ petlist: pets }))

  }

  render() {
    return (
      <div>
        <div>
        {this.state.petlist.map(pet => {
          return (
            <CreatureCard petStatus={pet}/>
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
