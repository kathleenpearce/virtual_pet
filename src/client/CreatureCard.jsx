import React, { Component } from 'react';
import Creature from './CreatureImg.jsx'

class CreatureCard extends Component {
  constructor() {
    super()
    this.state={time: new Date()}
  }

  currentTime(){
    this.setState({
      time: new Date()
    })
  }

  componentWillMount(){
    setInterval(() => this.currentTime(),1000)
  }

  render() {

    let timer = (this.state.time.getTime() - this.props.petStatus.time_last_fed_or_work) / 1000

    let maxHunger = 200
    let maxHappy = 200


    let hunger = ((this.props.petStatus.hunger_at_time_last_fed - (this.props.petStatus.strength_gene/10) * (timer))/maxHunger)*100

    let time_at_half_hunger = -(.5 * maxHunger - this.props.petStatus.hunger_at_time_last_fed)/(this.props.petStatus.strength_gene/10)*1000 + parseInt(this.props.petStatus.time_last_fed_or_work)

    if (hunger < 0){
      hunger = 0
    }


    // let happiness_at_half = ((this.props.petStatus.happiness_at_time_last_fed * 100 + maxHappy/60 * (time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)))
    //let happiness_at_half = (this.props.petStatus.happiness_at_time_last_fed + ((maxHappy/60) * ((time_at_half_hunger - this.props.petStatus.time_last_fed_or_work) / 1000))/maxHappy)*100

    // (time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)/1000 TIME IT TAKES TO GET TO 50%

    let happiness_at_half = (((time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)/1000) * (maxHappy/60)) + this.props.petStatus.happiness_at_time_last_fed
    if (happiness_at_half > 100) {
      happiness_at_half = 100
    }

    let happiness
    if (hunger > 50){
      happiness = (((this.state.time.getTime() - this.props.petStatus.time_last_fed_or_work)/1000) * (maxHappy/60)) + this.props.petStatus.happiness_at_time_last_fed
    } else {
      happiness = -(((this.state.time.getTime() - time_at_half_hunger)/1000) * (maxHappy/60)) + happiness_at_half
    }
    // let happiness
    // if (hunger > 50){
    //   happiness = ((this.props.petStatus.happiness_at_time_last_fed * 100 + maxHappy/60 * (this.state.time.getTime() - this.props.petStatus.time_last_fed_or_work)/100)/maxHappy)
    // } else {
    //   happiness = ((happiness_at_half - this.props.petStatus.intelligence_gene/10 * (this.state.time.getTime() - time_at_half_hunger)/100)/maxHappy)
    // }

    if (happiness > 100){
      happiness = 100
    }

    let happyId = 1

    if (happiness > 50) {
      happyId = 1
    } else if (happiness > 0) {
      happyId = 2
    } else {
      happyId = 3
      happiness = 0
    }


    return(
      <div>
        <div className='cardBackground'>
          <div className='nameContainer'>
            <h2 className='name'> {this.props.petStatus.name} - {this.props.petStatus.id} </h2>
            <div className='nameBackground'>
            </div>
          </div>
          <div className='creatureWindow'>
            <Creature petStatus={this.props.petStatus} happyStatus={happyId}/>
          </div>
          <div className='creatureStats'>
            <div className='happinessGague'>
              <img className='happiness' src='../../lib/img/noun_Heart.svg' />
              <p>{happiness.toFixed(2)}%</p>
              <p>{time_at_half_hunger}</p>
              <p>{happiness.toFixed(2)}</p>
              <p>{(((time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)/1000) * (maxHappy/60)) + this.props.petStatus.happiness_at_time_last_fed
}</p>
              <p>{"time to 50: " + Math.round((this.state.time.getTime() - time_at_half_hunger)/1000)} {(this.state.time.getTime() - this.props.petStatus.time_last_fed_or_work)/1000}</p>
              <h4>Int: {this.props.petStatus.intelligence_gene}</h4>
            </div>
            <div className='hungerGague'>
              <img className='hunger' src='../../lib/img/noun_Bitten_Apple.svg' />
              <p>{hunger.toFixed(2)}%</p>
              <h4>Str: {this.props.petStatus.strength_gene}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatureCard
