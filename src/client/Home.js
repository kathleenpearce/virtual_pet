import React, { Component } from 'react';

import './Home.css'

export default class Home extends Component {

  render(){
    return (
      <div className="home-page">
   <div className="logo-top">
      <div className="container text-cen">
         <h3>SELECTION</h3>
      </div>
   </div>
   <div className="username-profile">
      <div className="page-header">
         <div className="container text-left">
            <div className="col-sm-4">
               <h3>UserName</h3>
               <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "75%"}} alt="Image" />
            </div>
         </div>
         <a href="#" className="button">Buy New Pet</a>
      </div>
   </div>
   <div className="col-xs-9 bg-3 text-center">
      <div align="left">


      </div>
      <div className="row">
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
      </div>
      <br />
      <div className="row">
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
         <div className="col-sm-4">
            <p>Pet Name</p>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
      </div>
   </div>
   <div className="col-xs-3">
    <div className="current-jobs">
            <h4>Current Jobs</h4>
            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
         </div>
   </div>
   <br /><br />
   <footer className="container-fluid text-center">
   </footer>
</div>
    )
  }
}