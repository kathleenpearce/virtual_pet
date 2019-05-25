import React, { Component } from 'react';
import './app.css';
import './creature.css'
import './creatureCard.css'
import ReactImage from './react.png';
import CreatureCard from './CreatureCard.jsx'

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <div>
          <CreatureCard />
        </div>
        <div>
          <CreatureCard />
        </div>
      </div>
    );
  }
}