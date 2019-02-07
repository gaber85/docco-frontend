/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Logo from './assets/Docco.png';
import userImg from './assets/user-image.png';

const NavBar = props => {
  const logo = Logo;
  const userPic = userImg;
  const { img, name, history, logOutAct } = props;
  const logout = () => {
    localStorage.clear();
    logOutAct();
    history.push('/');
  }

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        background-color: #3498db;
        height: 65px;
        width: 100%;
        align-items: center;
      `}
    >
      <img
        css={css`
          height: 60px;
          width: 80px;
          cursor: pointer;
        `}
        alt="logo"
        src={logo}
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 15px;
        `}
      >
        <img
          css={css`
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: white;
          `}
          src={img || userPic}
          alt="user-profile"
        />
        <div
          css={css`
            color: white;
            padding-right: 20px;
          `}
        >
          {name}
        </div>
        <div
          css={css`
            color: white;
            cursor: pointer;
            &:hover {
              color: black;
            }
          `}
          className="logout"
          onClick={logout}
          onKeyPress={logout}
          role="button"
          tabIndex="-1"
        >
          Logout
        </div>
      </div>
    </div>
  );
};



export default NavBar;
