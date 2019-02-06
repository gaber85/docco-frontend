import { Component } from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import base64 from 'base-64';
import MainButton from '../MainButton';

import { login } from '../../redux/actions';

class Login extends Component {
  state = {
    user: {}
  };

  componentDidUpdate () {
    const {user,history} = this.props;
    if(user && user.token) {
      localStorage.setItem('token', user.token)
      history.push('/dashboard');
    }
  }

  handleChange = e => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = () => {
    const { user } = this.state;
    const { loginAct } = this.props;
    const loginData = `${user.email}:${user.password}`;
    const api = {
      method: 'POST',
      route: 'parties/login',
      headers: {
        Authorization: `Basic ${base64.encode(loginData)}`,
      }
    };
    loginAct(api);
  };

  render() {
    const { handleSubmit } = this;

    return (
      <div
        css={css`
          margin: auto;
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(
            to left top,
            #3498db,
            rgb(174, 217, 247)
          );
          background-repeat: no-repeat;
        `}
      >
        <div
          css={css`
            font-size: 9vw;
            color: #2C3E50;
          `}
        >
          Docco
        </div>
        <div
          css={css`
            font-style: italic;
            font-size: 2.5vw;
            color: #2C3E50;
          `}
        >
          An Innovative Approach to Contract Management
        </div>
        <form
          css={css`
            width: 80%;
            padding: 5%;
            display: flex;
            flex-direction: column;
            max-width: 300px;
          `}
          onChange={this.handleChange}
        >
          <input
            css={css`
            margin-bottom: 10px;
              height: 35px;
              font-size: 18px;
              border: none;
              padding: 4px;
              outline: none;
            `}
            autoComplete="off"
            type="text"
            name="email"
            placeholder="email..."
            required
          />
          <input
            css={css`
              margin-bottom: 20px;
              height: 35px;
              font-size: 18px;
              border: none;
              padding: 4px;
              outline: none;
            `}
            autoComplete="off"
            type="password"
            name="password"
            className="login-first-name-input"
            placeholder="password..."
            required
          />

            <MainButton align="flex-end" text="LOGIN" click={handleSubmit} />
        </form>
        <div
          css={css`
            font-size: 2vw;
            font-weight: 400;
            color: white;
          `}
          className="login-second-tagline"
        >
          Trust but Verify
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication
});

const mapDispatchToProps = dispatch => ({
  loginAct: obj => dispatch(login(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
