import React, { Component } from "react";
import "./Home.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div className="menu-container">
            <div className="menu">
              <a href="/">
                <div className="selection">Selection</div>
              </a>
              <div className="nav-links">
              <a href="/"><div className="browse-users">Your Profile</div></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/browseusers">
                  <div className="browse-users">Browse Users</div>
                </a>

                <a href="/login">
                  <div className="logout">Logout</div>
                  <div />
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
