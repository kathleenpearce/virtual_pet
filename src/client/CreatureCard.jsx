import React, { Component } from 'react';
import Creature from './CreatureImg.jsx'

import caculateHungerHappy from '../scripts/caculate_hunger_and_happiness.js'


class CreatureCard extends Component {
  cardRef = React.createRef();

  shouldComponentUpdate() {
    const rect = this.cardRef.current.getBoundingClientRect();
    return rect.left < window.innerWidth && rect.right > 0;
  }

  render() {
    let status = caculateHungerHappy(this.props.time, this.props.petStatus.time_last_fed_or_work, this.props.petStatus.hunger_at_time_last_fed, this.props.petStatus.happiness_at_time_last_fed, this.props.petStatus.strength_gene, this.props.petStatus.intelligence_gene, false)

    return(
      <div ref={this.cardRef}>
        <div className='cardBackground'>
          <div className='nameContainer'>
            <h2 className='name'> {this.props.petStatus.name} - {this.props.petStatus.id} </h2>
            <div className='nameBackground'>
            </div>
          </div>
          <div className='creatureWindow'>
            <Creature petStatus={this.props.petStatus} happyStatus={status.happyId}/>
          </div>
          <div className='creatureStats'>
            <div className='happinessGague'>
              <img className='happiness' src='../../lib/img/noun_Heart.svg' />
              <p>{status.happiness.toFixed(2)}%</p>
              <p>{status.timer}</p>
              <h4>Int: {this.props.petStatus.intelligence_gene}</h4>
            </div>
            <div className='hungerGague'>
              <img className='hunger' src='../../lib/img/noun_Bitten_Apple.svg' />
              <p>{status.hunger.toFixed(2)}%</p>
              <h4>Str: {this.props.petStatus.strength_gene}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatureCard
