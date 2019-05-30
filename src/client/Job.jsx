import React, { Component } from 'react';
import Creature from "./CreatureImg.jsx";
import "./jobs.css"


import caculateHungerHappy from '../scripts/caculate_hunger_and_happiness.js'
import caculateJobPay from '../scripts/caculate_job_pay.js'

export default class JobCard extends Component {



  render() {
    const payRate = [5,1]

   const payoutTotal = caculateJobPay(this.props.time, payRate, this.props.jobStatus)


    return (
      <div className='jobCard'>
        <div className='jobCardTop'>
          <p className='jobName'> {this.props.jobStatus.name} </p>
          <div className='statusJob'>
            <img className="happiness" src="../../lib/img/noun_Heart.svg" />
            {Math.round(payoutTotal.happiness)}
          </div>
          <div className='statusJob'>
            <img className="hunger" src="../../lib/img/noun_Bitten_Apple.svg" />
            {Math.round(payoutTotal.hunger)}
          </div>
        </div>
        <div className="creatureJobWindow">
          <div className="petJob">
            <Creature petStatus={this.props.jobStatus}/>
          </div>
        </div>
        <div className='jobCardBottom'>
          <strong> Earned: ${Math.round(payoutTotal.payout)}  </strong>

          <p> ${Math.round(payoutTotal.instPayout)} /s </p>
        </div>
      </div>
      )
  }
}