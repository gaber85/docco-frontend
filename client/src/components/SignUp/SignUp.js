import { Component, fetch } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import MainButton from '../MainButton';

class SignUp extends Component {
  // state holding user data
  state = {
    user: {}
  };

  //  updates states upon input value change
  handleChange = e => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [e.target.name]: e.target.value }
    });
  };

  // sends http request creating the User
  handleSubmit = () => {
    const user = this.state;
    this.setState({});

    fetch(`/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .catch(err => err);
  };

  render() {
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
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
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
                max-width: 45%;
                min-width: 45%;
              `}
              type="text"
              name="first"
              placeholder="First Name"
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
                max-width: 45%;
                min-width: 45%;
              `}
              type="text"
              name="last"
              placeholder="Last Name"
              autoComplete="off"
              required
            />
          </div>
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
            name="title"
            placeholder="Job Title"
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
            name="organization"
            placeholder="Organization"
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
}

export default SignUp;
