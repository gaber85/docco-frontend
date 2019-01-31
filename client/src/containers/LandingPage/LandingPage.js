import React, { Component } from 'react';
import './LandingPage.css';
import MainButton from '../../components/MainButton'
import supImg from './Docco-Hero.jpg';
import heroImg from './Docco-Geometric.png';
// eslint-disable-next-line
class LandingPage extends Component {
  render() {
    return (
      <div className="Landing-page-container">
        <div className="Landing-page-login">
          <div className="login">Sign-up | Login</div>
        </div>
        <img className="hero-image" alt="hero img" src={heroImg} />
        <div className="get-started-button"><MainButton text='Get Started'/></div>
        <div className="landing-page-content">
          <div className="landing-page-content-title"><h1>An Innovative Approach to Contract Management</h1></div>
          <div className="landing-page-content-body">
            <div className="landing-page-content-body-text">
              Docco contract management software goes beyond traditional back and forth paper hussle to help medium to large-sized
              business easily share contracts and update without the typical paper trail.
              <p><h2>Jumpstart Your Contract Today!</h2></p>
              Get started with your first contract today! Simply create an account, upload an existing contract with supporting documentation,
              and begin share with team members and beneficiary parties. 
            </div>
            <img className="sup-img" alt="people sharing" src={supImg} />
          </div>
        </div>
        <div className="footer">2019 Docco Inc. All rights reserved</div>
      </div>
    )
  }
}

export default LandingPage;