  import React, { Component } from 'react';

  import './Home.css'



  export default class SelectMate extends Component {
    render () {
      return (
        <div>
          <div className="feeding-page-content">
          <div className="feeding-container">
          <a href="http://example.com"><div className="food-1">Bone<i class="fas fa-bone"></i></div><br />
          <div className="food-price-1">$10</div></a>
          <a href="http://example.com"><div className="food-2">Food Option 2</div><br />
          <div className="food-price-2">$25</div></a>
          <a href="http://example.com"><div className="food-3">Food Option 3</div><br />
          <div className="food-price-3">$45</div></a>
          <a href="#" className="button">Feed</a>
          </div>
        </div>
      </div>
      )
    }
  }