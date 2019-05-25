import React, { Component } from 'react';

import './Home.css'

export default class PetProfile extends Component {
  render () {
    return (
      <div className="col-xs-12 bg-3 text-center">
      <div align="left">
      </div>
      <div className="row">
      <div className="col-sm-6">
      <br /><br /><br />
        <p className="pet-profile-img"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" /></p>
        </div>

      <div className="col-sm-4">
      <br /><br /><br />
        <div class="pet-profile-name"><h2>Pet Name</h2></div>

            <div class="pet-profile-stats">
            <ul> Energy:  </ul><br />
            <ul> Strength: </ul><br />
            <ul>Hunger: </ul><br />
            <ul> Intelligence: </ul><br />
            <ul>Happiness: </ul><br />
            <ul> Gender:</ul><br />

        </div>
        </div>

        <div className="col-sm-6">
         <br /><a href="#" className="button" >Send To Work</a>  <a href="#" className="button">Feed</a> <a href="#" className="button">Bread</a>
         <a href="#" className="button-free">Set Free</a>
        </div>


        </div>



        </div>





      )
  }
}