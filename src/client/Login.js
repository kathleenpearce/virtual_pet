import React, { Component } from 'react';

import './Home.css'

export default class Login extends Component {
  render () {
    return (
<div className="box">
<h2>Welcome to Selection!</h2>
<br />
Username <input type="username" name="username" className="email" /><br /><br />

<a href="/" className="login-button">Login</a>
</div>

    )
  }
}



