import React, { Component } from 'react';

import './Home.css'
import Creature from './CreatureImg.jsx'
import CreatureCard from './CreatureCard.jsx'
import CreatureContainer from './CreatureContainer'


export default class Home extends Component {

  render(){
    return (
<div>
<div className='header-container'>
  <div className='header'>
  <div className='logo'><img src="https://placehold.it/150x80?text=IMAGE"/></div>
    <div className='subscribe'>Username</div><div className="avatar-info">
    </div>
    <a href="#" className="new-pet-button" >Buy New Pet</a>
  </div>
</div>


<br /><br />
<div className="flex-home-page-elements-container">
<CreatureContainer petlist={this.props.petlist} time={this.props.time}/>
<br /><br /><br />

<div className='job-card-container'>
<p className='job-card-title'><h4>Current Jobs</h4></p>
  <div className='job-menu'>
    <div className='job-grid-item'>JOB 1</div>
    <div className='job-grid-item'>JOB 2</div>
    <div className='job-grid-item'>JOB 3</div>

  </div>
</div>
</div>



<br /><br /><br />

<div className='footer'>
  <div className='footer-item footer-one'></div>

</div>


</div>
    )
  }
}