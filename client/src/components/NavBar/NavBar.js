import React, { Component } from 'react';
import './NavBar.css';
import Logo from './Docco.png';
import userImg from './user-image.png';

class NavBar extends Component {
  render() {
    const logo = Logo;
    const userPic = userImg;
    return (
      <div className="nav-bar">
        <img className="small-logo" alt="logo" src={logo}></img>
        <div className="user">
          <img className="user-image" src={this.props.img? this.props.img : userPic} alt="user-profile"></img>
          <div className="user-name">{this.props.name}</div>
          <div className="logout">Logout</div>
        </div>
      </div>
    );
  }
}

export default NavBar;