import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Home from './Home';
import Navbar from './Navbar';
import PetProfile from './PetProfile';
import BrowseUsers from './BrowseUsers'
import Login from './Login'
import BreedFirst from './BreedFirst'

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
        <Navbar />

        <BreedFirst />
      </div>
    );
  }
}
