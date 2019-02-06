import { Component} from 'react';
import {connect} from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import MainButton from '../MainButton';
import { signUp } from '../../redux/actions';


class SignUp extends Component {
  // state holding user data
  state = {
    user: {}
  };

  //  updates state upon input value change
  handleChange = e => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [e.target.name]: e.target.value }
    });
  };

  // sends http request creating the User
  handleSubmit = () => {
    const { user }= this.state;
    const {signUpAct} = this.props;
    this.setState({});
    const api = {
      route: 'parties',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    signUpAct(api);
  }

  render () {
    const { handleChange, handleSubmit } = this;
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
            color: #2c3e50;
            font-size: 7vw;
            margin-bottom: 50px;
          `}
        >
          Get Started with Docco
        </div>
        <form
          css={css`
            display: flex;
            flex-direction: column;
            min-width: 40vw;
            max-width: 85vw;
          `}
          name="signUp"
          onChange={handleChange}
        >
            <input
              css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
              `}
              type="text"
              name="legalName"
              placeholder="Legal Name"
              autoComplete="off"
              required
            />
            <input
              css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
              `}
              type="text"
              name="displayName"
              placeholder="Display Name"
              autoComplete="off"
              required
            />

          <input
            css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
            `}
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="off"
            required
          />
          <input
            css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
            `}
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
            `}
            type="text"
            name="phone"
            placeholder="Mobile Phone Number"
            autoComplete="off"
            required
          />

          <input
            css={css`
              border: none;
              font-size: 16px;
              color: #bdc3c7;
              margin-bottom: 25px;
              height: 25px;
              padding: 4px;
              outline: none;
            `}
            type="text"
            name="authorisation"
            placeholder="Password"
            autoComplete="off"
            required
          />

          <MainButton
            align="flex-end"
            text="Get Started"
            click={handleSubmit}
          />
        </form>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  signUpAct: obj => dispatch(signUp(obj))
});


export default connect(
  null,
  mapDispatchToProps)(SignUp);
