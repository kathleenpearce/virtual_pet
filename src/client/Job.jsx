import React, { Component } from 'react';
import Creature from "./CreatureImg.jsx";


import caculateHungerHappy from '../scripts/caculate_hunger_and_happiness.js'
import caculateJobPay from '../scripts/caculate_job_pay.js'

export default class JobCard extends Component {



  render() {
    const payRate = [5,1]

   const payoutTotal = caculateJobPay(this.props.time, payRate, this.props.jobStatus)


    return (
      <div>
      {Math.round(payoutTotal.payout)} {Math.round(payoutTotal.hunger)} {Math.round(payoutTotal.happiness)} {payoutTotal.instPayout}

      </div>
      )
  }
}