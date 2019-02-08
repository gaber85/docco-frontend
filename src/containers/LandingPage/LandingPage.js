import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './LandingPage.css';
import MainButton from '../../components/MainButton'
import supImg from './Docco-Hero.jpg';
import logo from './Docco.png';
import { logOut } from '../../redux/actions';
// eslint-disable-next-line
class LandingPage extends Component {
  render() {
    const {authentication, logOutAct} = this.props;
    return (
      <div className="Landing-page-container">
        <div className="Landing-page-login">
          <img className="small-logo" alt="logo" src={logo} />
          {authentication.token ? 
            (<div className="login">
              <Link className="white-link" to='/dashboard'>DashBoard</Link> | 
              <div className="white-link" role="button" onClick={logOutAct} onKeyPress={logOutAct} tabIndex="-1" >Logout</div>
            </div>)
          : (<div className="login">
              <Link className="white-link" to='/sign-up'>Sign-up</Link> |
              <Link className="white-link" to='/login'>Login</Link>
            </div>)
          }
        </div>
        <div className="landing-page-header">
          <div className="comp-name">Docco</div>
          <div className="catchphrase">An Innovative Approach to Contract Management</div>
        <div className="get-started-button">
          <Link className="midnight-link" to='/sign-up'>
            <MainButton text='Get Started'/>
          </Link>
        </div>
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
                image: 'https://previews.dropbox.com/p/thumb/AAXisU6So2EtX-xC_squ48M69T3zpUFdlA304Sgzakj8fWzi1QCn__m39gTc91op2eq5sTcY5QMrY-_dmUZTu2zmSXXyGzHQDKxxT8GnOpzSuFjly8Fzw23WZo37fTyC69IaRA1ioCP5Vgfi6G-MMQBuTywPNc0_iAcAbr4uFh1l6YFIHgXlEg2mozBqynv_cy5SYKNRb-j4jvWIalBfgqcGy27FKZ-yiM1AaJnoO2j_mA/p.jpeg?size_mode=5',
                amount: 0.5,
                slowerScrollRate: true,
              }
            ]}
            style={{ height: '300px' }}
          />
            <div className="landing-page-content">
              <div className="landing-page-content-title"><h2>Consolidate Your Contract Management Process</h2></div>
              <div className="landing-page-content-body">
                <div className="landing-page-content-body-list">
                  <div className="line-icon"><i className="fas fa-users landing-page-icons"/>Collaborate and share with your team and beneficiaries</div>
                  <div className="line-icon"><i className="far fa-edit landing-page-icons"/>Edit contracts on the spot and instantly share changes</div>
                  <div className="line-icon"><i className="fas fa-history landing-page-icons"/>Revisit and track previous amendments</div>
                  <div className="line-icon"><i className="far fa-calendar-check landing-page-icons"/>Keep deadlines with built-in contract countdowns</div>
                </div>
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
                <div className="get-started-button">
                  <Link className="midnight-link" to='/sign-up'>
                    <MainButton text='Get Started'/>
                  </Link>
                </div>
              </div>
            </div>

        <div className="footer">2019 Docco Inc. All rights reserved</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logOutAct: () => dispatch(logOut())
})

const mapStateToProps = state => ({
  authentication: state.authentication
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);