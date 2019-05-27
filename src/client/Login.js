import React, { Component } from 'react';

import './Home.css'

export default class Login extends Component {
  render () {
    return (
<div className="box">
<h2>Welcome to Selection!</h2>
<br />
Username <input type="username" name="username" className="email" /><br /><br />
Password <input type="password" name="email" className="email" /><br /><br />
<a href="#" className="button"><div className="btn">Login</div></a>
</div>

    )
  }
}



