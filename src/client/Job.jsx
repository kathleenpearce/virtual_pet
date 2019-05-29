import React, { Component } from 'react';

import caculateHungerHappy from '../scripts/caculate_hunger_and_happiness.js'

export default class JobCard extends Component {


  render() {

    const job_multiplier_str = 5
    const job_multiplier_int = 1

    const maxHunger = 200
    const maxHappy = 200

    let timer = (this.props.time - this.props.jobStatus.job_start_time)/1000

    const payoutRatio = job_multiplier_str * this.props.jobStatus.strength_gene + job_multiplier_int * this.props.jobStatus.intelligence_gene

    const status = caculateHungerHappy(this.props.time, this.props.jobStatus.job_start_time, this.props.jobStatus.hunger_at_start, this.props.jobStatus.happy_at_start, this.props.jobStatus.strength_gene, this.props.jobStatus.intelligence_gene, true)

    let hAndH = (status.hunger + status.happiness)/200

    if (hAndH < (this.props.jobStatus.hunger_at_start + this.props.jobStatus.happy_at_start)/800 ) {
      hAndH = (this.props.jobStatus.hunger_at_start + this.props.jobStatus.happy_at_start)/800
    }

   // const payoutHunger = timer * (payoutRatio) * (hAndH)/maxHunger * 100
    let payoutHunger = timer * (payoutRatio) * (this.props.jobStatus.hunger_at_start - ((this.props.jobStatus.strength_gene/10) * timer / 2))/maxHunger * 100 * 2 /200

    const genes = (this.props.jobStatus.strength_gene/10)/2
    const startStat = this.props.jobStatus.hunger_at_start

    const payoutHungerMax = (- (genes) * (startStat/(2 * genes)) * (startStat/(2 * genes)) + (startStat) * (startStat/(2 * genes))) * ((job_multiplier_str * this.props.jobStatus.strength_gene) + (job_multiplier_int * this.props.jobStatus.intelligence_gene)) / 400 * 2

    if (status.hunger <= 0) {
      payoutHunger = payoutHungerMax
    }

    let payoutHappy = timer * (payoutRatio) * (this.props.jobStatus.happy_at_start - ((this.props.jobStatus.intelligence_gene/10) * timer / 2))/maxHappy * 100 * 2 /200

    const genesInt = (this.props.jobStatus.intelligence_gene/10)/2
    const startStatInt = this.props.jobStatus.happy_at_start

    const payoutHappyMax = (- (genesInt) * (startStatInt/(2 * genesInt)) * (startStatInt/(2 * genesInt)) + (startStatInt) * (startStatInt/(2 * genesInt))) * ((job_multiplier_str * this.props.jobStatus.strength_gene) + (job_multiplier_int * this.props.jobStatus.intelligence_gene)) / 400 * 2

     if (status.happiness <= 0) {
      payoutHappy = payoutHappyMax
    }

    const payoutTotal = payoutHunger + payoutHappy

    return (
      <div>
      {Math.round(payoutTotal)} { Math.round(status.hunger) } { Math.round(status.happiness) } {Math.round(payoutHungerMax + payoutHappyMax)}
      </div>
      )
  }
}