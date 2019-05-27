  import React, { Component } from 'react';

  import './Home.css'
  import CreatureCard from './CreatureCard'

  export default class PetProfile extends Component {
    render () {
      return (

    <div>
    <br /><br />
    <div className="pet-profile-content">
    <div className="pet-profile-creature-card">
    <div className='creature-grid-item'><CreatureCard /></div>
    </div>

    <div className="pet-profile-info">
    <div className="pet-profile-name"><h2>Pet Name</h2></div>


            <div className="pet-profile-stats">
            <ul> Energy:  </ul><br />
            <ul> Strength: </ul><br />
            <ul>Hunger: </ul><br />
            <ul> Intelligence: </ul><br />
            <ul>Happiness: </ul><br />
            <ul> Gender:</ul><br />


            </div>


      <div className="pet-profile-buttons">
      <a href="#" className="button" >Send To Work</a>
      <a href="#" className="button">Feed</a> <a href="#" className="button">Breed</a>
      <a href="#" className="button-free">Set Free</a>

     </div>

    </div>

    </div>



    </div>







        )
    }
  }