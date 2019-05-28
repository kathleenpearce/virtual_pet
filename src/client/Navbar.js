import React, { Component } from "react";
import "./Home.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <body>
          <div className="menu-container">
            <div className="menu">
              <a href="/">
                <div className="date">SELECTION</div>
              </a>
              <div className="nav-links">
                <a href="http://example.com">
                  <div className="browse-users">Browse Users</div>
                </a>
                <div />
                <a href="http://example.com">
                  <div className="logout">Logout</div>
                </a>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
