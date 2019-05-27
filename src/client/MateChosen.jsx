import React, { Component } from 'react';

import './Home.css'
import CreatureCard from './CreatureCard'

export default class MateChosen extends Component{
  render () {
    return (
      <div>

      <br /><br />
        <div className="breed-first-content">
        <div className="pet-profile-content">
        <div className="pet-profile-creature-card">
        <div className='creature-grid-item'><CreatureCard /></div>
        </div></div>
        <div className="heart-icon">
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRph-g6gNjVYjR2YHXGOBzEMwMtgIK66y4Rd9kwnOePc4fNFrk" width="200" height="200"/></p><br /><br />
        </div>
        <div className="pet-profile-content">
        <div className="pet-profile-creature-card">
        <div className='creature-grid-item'><CreatureCard /></div>

        </div></div></div>
        <a href="#" className="button">Breed</a>
      </div>
    )
  }
}