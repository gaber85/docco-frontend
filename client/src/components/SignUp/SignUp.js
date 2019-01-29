import React, { Component } from 'react';
import MainButton from '../MainButton';
import './SignUp.css';

class SignUp extends Component {
  state = {

      first: '',
      last: '',
      title: '',
      email: '',
      organization: ''

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    }
    )
    console.log(this.state);

  }

  handleSubmit = () => {

    console.log(this.state);
  }




  render () {


    const { handleChange, handleSubmit } = this;
    const { first, last, title, email, organization } = this.state;
    return (
      <div className="form-container">
        <span className="welcome">
          <h2>Getting Started with Docco</h2>
        </span>
        <form className="my-form sign-up-form" name="signUp" onChange={handleChange} >
          <div className="user-name">
            <input type="text" name="first" className="my-input first-name" value={first} placeholder="First Name" required />
            <input type="text" name="last" className="my-input last-name" value={last} placeholder="Last Name" required />
          </div>
          <input type="text" name="title" className="my-input user-title" value={title} placeholder="Job Title" required />
          <input type="text" name="email" className="my-input user-email" value={email} placeholder="Email" required />
          <input type="text" name="organization" className="my-input user-organization" value={organization} placeholder="Organization" required />
          <MainButton text="Get Started" click={handleSubmit} />
        </form>
      </div>
    )
  }




}


export default SignUp;