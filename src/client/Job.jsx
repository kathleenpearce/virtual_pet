import React, { Component } from 'react';

import caculateHungerHappy from '../scripts/caculate_hunger_and_happiness.js'

export default class JobCard extends Component {


  render() {

    let timer = (this.props.time - this.props.jobStatus.job_start_time)/1000

    const status = caculateHungerHappy(this.props.time, this.props.jobStatus.job_start_time, this.props.jobStatus.hunger_at_start, this.props.jobStatus.happy_at_start, this.props.jobStatus.strength_gene, this.props.jobStatus.intelligence_gene, true)

    return (
      <div>
      {status.hunger}, {status.happiness}
      </div>
      )
  }
}