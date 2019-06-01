import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from "axios";


import './Home.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ""

    }
  }

  componentDidMount() {
    const userName = this.props.location.search.split("=")[1]
    this.props.login(userName)
  }

onClickLogin = () => {
  axios.post("/api/login", {username: this.state.username}).then(response => {
    console.log("response", response)
      this.props.login(response.data)
      return this.props.history.push('/?user=kat')
    // console.log("response", response.data)
  })

  // if successful then do this stuff
  // this.props.login(this.state.username)
  // this.props.history.push('/')
}

onChangeUsername = (e) => {
  if (e.target.value) {
  this.setState({username: e.target.value})
  }
}

  render () {
    return (
      <div className="box">
        <h2>Welcome to Selection!</h2>
        <br />
        Username <input type="username" name="username" className="email" onChange={this.onChangeUsername}/><br /><br />
        <button onClick={this.onClickLogin}>Login</button>
      </div>
    )
  }
}

export default withRouter(Login)



