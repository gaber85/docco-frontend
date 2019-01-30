import React, { Component } from 'react';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar'
import TeamSection from '../../components/TeamSection';
import ContractSection from '../../components/ContractSection';
import SideBar from '../../components/SideBar';
// eslint-disable-next-line
class ContractPage extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="team-section">
          <TeamSection />
        </div>
        <div className="contract-display">
          <div className="container-top">
            <div className="title">Apple Contract</div>
            <div className="search-bar-section"><SearchBar/></div>
          </div>
          <div className="contract">
            <ContractSection />
            <div className="sidebar-controls">
            <SideBar />
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default ContractPage;