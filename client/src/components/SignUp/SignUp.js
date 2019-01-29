import React, { Component, fetch } from 'react';
import MainButton from '../MainButton';
import './SignUp.css';

class SignUp extends Component {

  // state holding user data
  state = {
    user: {

    }

  }



  //  updates states upon input value change
  handleChange = e => {
    const {user} = this.state;
    this.setState({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  // sends http request creating the User
  handleSubmit = () => {

    const user = this.state;
    this.setState({});

    fetch(`/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer `
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .catch(err => err);

  }




  render () {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form-container">
        <span className="welcome">
          <h2>Getting Started with Docco</h2>
        </span>
        <form className="my-form sign-up-form" name="signUp" onChange={handleChange} >
          <div className="user-name">
            <input type="text" name="first" className="my-input first-name" placeholder="First Name" required />
            <input type="text" name="last" className="my-input last-name" placeholder="Last Name" required />
          </div>
          <input type="text" name="title" className="my-input user-title" placeholder="Job Title" required />
          <input type="text" name="email" className="my-input user-email" placeholder="Email" required />
          <input type="text" name="organization" className="my-input user-organization" placeholder="Organization" required />
          <MainButton text="Get Started" click={handleSubmit} />
        </form>
      </div>
    )
  }




}


export default SignUp;