import React, { Component } from 'react';

export default class JobCard extends Component {

  render() {
    return (
      <div>
      {this.props.time - this.props.jobStatus.job_start_time}
      </div>
      )
  }
}