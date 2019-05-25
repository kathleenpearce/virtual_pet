import React, { Component } from 'react';
import Creature from './CreatureImg.jsx'

class CreatureCard extends Component {
  render() {
    return(
      <div>
        <div className='cardBackground'>
          <div className='nameContainer'>
            <h2 className='name'> Fluffykins </h2>
            <div className='nameBackground'>
            </div>
          </div>
          <div className='creatureWindow'>
            <Creature />
          </div>
          <div className='creatureStats'>
            <div className='happinessGague'>
              <img className='happiness' src='../../lib/img/noun_Heart.svg' />
              <p>40/50</p>
              <h4>Int: 4</h4>
            </div>
            <div className='hungerGague'>
              <img className='hunger' src='../../lib/img/noun_Bitten_Apple.svg' />
              <p>20/50</p>
              <h4>Str: 5</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatureCard
