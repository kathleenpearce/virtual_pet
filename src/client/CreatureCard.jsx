import React, { Component } from 'react';
import Creature from './CreatureImg.jsx'

class CreatureCard extends Component {
  render() {
    return(
      <div>
        <div className='cardBackground'>
          <div className='nameContainer'>
            <h2 className='name'> {this.props.petStatus.name} - {this.props.petStatus.id} </h2>
            <div className='nameBackground'>
            </div>
          </div>
          <div className='creatureWindow'>
            <Creature petStatus={this.props.petStatus}/>
          </div>
          <div className='creatureStats'>
            <div className='happinessGague'>
              <img className='happiness' src='../../lib/img/noun_Heart.svg' />
              <p>40/50</p>
              <h4>Int: {this.props.petStatus.intelligence_gene}</h4>
            </div>
            <div className='hungerGague'>
              <img className='hunger' src='../../lib/img/noun_Bitten_Apple.svg' />
              <p>20/50</p>
              <h4>Str: {this.props.petStatus.strength_gene}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatureCard
