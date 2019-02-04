import React from 'react';
import SearchBar from '../../components/SearchBar';
import ContractList from '../../components/ContractList';
import './Dashboard.css';
import PlusButton from '../../components/PlusButton';

const Dashboard = props => {
  const handleInactiveNegotiations = () => {
    console.log('click handle Inactive Negotiations');
  };

  return (
    <div className="container">
      <div className="top-row">
        <div className="left">
          <h1>My Active Negotiations</h1>
        </div>
        <div className="right">
          <SearchBar />
        </div>
      </div>
      <div className="main-row">
        <ContractList />
      </div>
      <div className="bottom-row">
        <div className='inactive-negotiation' onClick={handleInactiveNegotiations}>inactive negotiations</div>
        <div className="add-negotiation">
          <PlusButton size="2" />
          <h3 className="add-new-negotiation-text">Add new negotiation</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
