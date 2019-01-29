import React, { Component } from 'react';
import MainButton from '../MainButton';
import './SignUp.css';

class SignUp extends Component {
  state = {
    user: {
      first: '',
      last: '',
      title: '',
      email: '',
      organization: ''
    }

  }


  render () {

    const { user } = this.state;
    return (
      <div className="form-container">
      <span className="welcome">
      <h2>Getting Started with Docco</h2>
      </span>
        <form className="my-form sign-up-form" name="signUp" onSubmit="" onChange >
          <div className="user-name">
            <input type="text" className="my-input first-name" value={user.first} placeholder="First Name" />
            <input type="text" className="my-input last-name" value={user.last} placeholder="Last Name" />
          </div>
          <input type="text" className="my-input user-title" value={user.title} placeholder="Job Title" />
          <input type="text" className="my-input user-email" value={user.email} placeholder="Email" />
          <input type="text" className="my-input user-organization" value={user.organization} placeholder="Organization" />
          <MainButton text="Get Started" onClick="document.forms['signUp'].submit()" />
        </form>
      </div>
    )
  }
}


export default SignUp;