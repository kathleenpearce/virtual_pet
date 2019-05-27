import React, { Component } from 'react';

import './Home.css'



export default class CreatureCard extends Component {
render () {
  return (
     <div className="col-sm-4">
        <p>Pet Name</p>
        <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
      </div>
    )
  }
}

