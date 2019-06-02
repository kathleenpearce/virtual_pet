import React, { Component } from 'react';


import './Home.css'

import Creature from './CreatureImg.jsx'
import JobCard from './Job.jsx'

// currently the current jobs component is still in home.js!!

export default class CurrentJobs extends Component {

  render() {
    return (
      <div>
      {this.props.jobList.map(job => {
          if (!job.job_end_time){
            return (
              <JobCard key={'jobKey'+job.id} jobStatus={job} time={this.props.time} returnFromWork={this.props.returnFromWork} />
            )
          }
        })}
      </div>
      )
  }
}