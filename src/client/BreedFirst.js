import React, { Component } from 'react';

import './Home.css'

export default class BreedFirst extends Component{
  render () {
    return (
      <div>

      <div className="row">
         <div className="col-sm-4">
            <p className="first-pet-card">Pet Name
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" /></p>
         </div>


         <div className="col-sm-2">
         <p className="heart-icon">
          <img src="http://www.clker.com/cliparts/y/U/t/I/6/O/white-heart-outline.svg" className="img-responsive" style={{width: "100%"}} alt="Image" /></p>
         </div>


         <div className="col-sm-4">
            <p className="second-pet-card">Pet Name</p>
            <p className="plus-icon"><img src="https://cdn.shopify.com/s/files/1/0005/8700/6067/files/PlusIcon_Small_Gray-1.png?574168035634333567" className="img-responsive" style={{width: "100%"}} alt="Image" /></p>
         </div></div>


      </div>
    )
  }
}

