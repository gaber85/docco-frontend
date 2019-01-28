import React from 'react';
import './NavBar.css';
import Logo from './assets/Docco.png';
import userImg from './assets/user-image.png';

const NavBar = (props) => {
    const logo = Logo;
    const userPic = userImg;
    const {img, name} = props
    return (
      <div className="nav-bar">
        <img className="small-logo" alt="logo" src={logo} />
        <div className="user">
          <img className="user-image" src={img || userPic} alt="user-profile" />
          <div className="user-name">{name}</div>
          <div className="logout">Logout</div>
        </div>
      </div>
    );
}

export default NavBar;