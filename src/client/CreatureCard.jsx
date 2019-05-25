import React, { Component } from 'react';
import Creature from './CreatureImg.jsx'

class CreatureCard extends Component {
  render() {
    return(
      <div>
        <div className='cardBackground'>
          <div className='nameContainer'>
            <h2 className='name'> Fluffy </h2>
          </div>
          <div className='creatureWindow'>
            <Creature />
          </div>
          <div className='CreatureStats'>
          <img src='../../lib/img/noun_Heart.svg' />
          </div>
        </div>
      </div>
    )
  }
}

export default CreatureCard
