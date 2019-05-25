import React, { Component } from 'react';

export default class Navbar extends Component {
  render () {
    return (

        <nav className="navbar navbar-inverse">
      <div className="container-fluid">
            <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               </button>
               <br />
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
               <ul className="nav navbar-nav top-nav-links">
                  <li><a href="#" >SELECTION</a></li>
                  <li><a href="#" >User Profile</a></li>
                  <li><a href="#">Browse Users</a></li>
               </ul>
               <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span>  Logout</a></li>
               </ul>
            </div>
         </div>
      </nav>



      )
  }

}