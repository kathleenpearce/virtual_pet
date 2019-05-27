  import React, { Component } from 'react';

  import './Home.css'
  import CreatureCard from './CreatureCard'

 export default class CreatureContainer extends Component {
  render () {
    return (
      <div className="title-align"><p className='creature-card-title'><h4>Your Pets</h4></p>
<div className='creature-card-container'></div>
    <div className='creature-menu'>
    {this.props.petlist.map(pet => {
      return (
      <CreatureCard className='creature-grid-item' petStatus={ pet } time={ this.props.time } />
      )
      })}



  </div>
</div>

      )
  }



 }

