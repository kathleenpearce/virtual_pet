import React, { Component } from 'react';

import './Home.css'
import CreatureCard from './CreatureCard'

export default class SelectMate extends Component {
  render () {
    return (
      <div>
      <br></br>
        <div className='creature-card-container'></div>
        <div className='creature-menu'>
        <a href="http://example.com"><div className='creature-grid-item'><CreatureCard /></div></a>
        <a href="http://example.com"><div className='creature-grid-item'><CreatureCard /></div></a>
        <a href="http://example.com"><div className='creature-grid-item'><CreatureCard /></div></a>
        <a href="http://example.com"><div className='creature-grid-item'><CreatureCard /></div></a>
      </div>
    </div>
    )
  }
}