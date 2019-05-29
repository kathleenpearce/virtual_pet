import React, { Component } from 'react';


import './Home.css'

import Creature from './CreatureImg.jsx'
import JobCard from './Job.jsx'

// currently the current jobs component is still in home.js!!

export default class CurrentJobs extends Component {
  constructor() {
        super();
        this.state = {
          jobList: []
        }
      }

  componentDidMount() {
    fetch('/api/getJobs')
      .then(res => res.json())
      .then(jobs => this.setState({ jobList: jobs.reverse() }))

  }

  render() {
    return (
      <div>
      {this.state.jobList.map(job => {
          return (
            <JobCard jobStatus={job} time={this.props.time}/>
          )
        })}
      </div>
      )
  }
}