import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import './LandingPage.css';
import MainButton from '../../components/MainButton'
import supImg from './Docco-Hero.jpg';
import logo from './Docco.png';
// eslint-disable-next-line
class LandingPage extends Component {
  render() {
    return (
      <div className="Landing-page-container">
        <div className="Landing-page-login">
          <img className="small-logo" alt="logo" src={logo} />
          <div className="login">Sign-up | Login</div>
        </div>
        <div className="landing-page-header">
          <div className="comp-name">Docco</div>
          <div className="catchphrase">An Innovative Approach to Contract Management</div>
        <div className="get-started-button"><MainButton text='Get Started'/></div>
        </div>
        <div className="landing-page-content">
          <div className="landing-page-content-title"><h2>Get Up and Running in No Time!</h2></div>
          <div className="landing-page-content-body">
            <div className="landing-page-content-body-text">
              Docco contract management software goes beyond traditional back and forth paper hussle to help medium to large-sized
              business easily share contracts and update without the typical paper trail associated. Facilitate collaboration with your
              internal team and external parties.
              <p><h2>Contract Versioning At Your Fingertips</h2></p>
              Navigate through all the versions of a contract created during the negotiation period. Keep track of all 
              the changes made by all parties and beneficiaries, all with a click of a button. Easily revert back to any versions
              without upsetting the creator-beneficiary dynamic.
            </div>
            <img className="sup-img" alt="people sharing" src={supImg} />
          </div>
        </div>
          <ParallaxBanner
            className="test2"
            layers={[
              {
                image: 'https://uc5b8c83d1da4205805ead9d5414.previews.dropboxusercontent.com/p/thumb/AAUHrYC5QfxpeXX0wpl4aBOWw5sNT-qeOJUN7aE6gm5oguntBG_UHp6Es9WBi9QQ5hKmjSSF_d_3zZrT2Y2NoKntEEcmFbbOTSj8mZclYPXy0wBMZPGd1oiSqY0frkYT66zExIRxU1JTnDyHtEh5ht7R6YKP2cH8w2hJT4pfDgFlMRMS_FF6jhtbg4k4E-xa3wz4-H2zWFmwILz6BLotNaA1SNWI-DfRMaWkqUZA7dpNEY1T6iKzaH3qBq2fgrJBNMkINTw1p9X8Urz5mrzP8O6u/p.jpeg?size_mode=5',
                amount: 0.5,
                slowerScrollRate: true,
              }
            ]}
            style={{ height: '300px' }}
          />
            <div className="landing-page-content">
              <div className="landing-page-content-title"><h2>Consolidate Your Contract Management Process</h2></div>
              <div className="landing-page-content-body">
                <ul className="landing-page-content-body-list">
                  <li><i className="fas fa-users landing-page-icons"/>Collaborate and share with your team and beneficiaries</li>
                  <li><i className="far fa-edit landing-page-icons"/>Edit contracts on the spot and instantly share changes</li>
                  <li><i className="fas fa-history landing-page-icons"/>Revisit and track previous amendments</li>
                  <li><i className="far fa-calendar-check landing-page-icons"/>Keep deadlines with built-in contract countdowns</li>
                </ul>
                <img className="logo-img" alt="people sharing" src={logo} />
              </div>
            </div>
            <div className="landing-page-header">
              <div className="landing-page-content-title"><h2>Jumpstart Your Contract Today!</h2></div>
              <div className="landing-page-lower-body">
                <div className="center-text">
                    Get started with your first contract today! Simply create an account, upload an existing contract with supporting documentation,
                    and begin share with team members and beneficiary parties.
                </div>
                <div className="get-started-button"><MainButton text='Get Started'/></div>
              </div>
            </div>
            
        <div className="footer">2019 Docco Inc. All rights reserved</div>
      </div>
    )
  }
}

export default LandingPage;