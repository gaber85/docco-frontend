import React, { Component } from 'react';
import './TeamSection.css';
import userImg from '../NavBar/assets/user-image.png';

// eslint-disable-next-line
class TeamSection extends Component {
  render() {
    const { yourDetails } = this.props;
    const userPic = userImg
    return (
      <div className="team-container">
        <div className="all-members">
          <div className="team-member">
            <img className="user-image" src={userPic} alt="user-profile" />
            <div className="member-name">{ yourDetails && yourDetails.displayName }</div>
            <div className="minus-sign"><i className="fas fa-minus" /></div>
          </div>
          <div className="team-member">
            <img className="user-image" src={userPic} alt="user-profile" />
            <div className="member-name">Edward</div>
            <i className="fas fa-minus minus-sign" />
          </div>
        </div>
        <div className="add-members">
          <div className="plus-button"><i className="fas fa-plus" /></div>
          <div className="add-member-text">Add Member</div>
        </div>
      </div>
    )
  }
}

export default TeamSection;
