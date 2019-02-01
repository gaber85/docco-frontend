import React, { Component } from 'react';
import PlusButton from '../PlusButton';
import './AddMember.css';

export default class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      permissions: {
        read: true,
        edit: true,
        approve: true
      }
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInputOnFocus = event => {
    this.setState({ [event.target.name]: '' });
  };

  handleCheckboxChange = event => {
    const checkBoxName = event.target.name;
    const { permissions } = this.state;
    this.setState({
      permissions: {
        ...permissions,
        [checkBoxName]: !permissions[checkBoxName]
      }
    });
  };

  handleSubmit = () => {
    const user = this.state;
    return user;
    // fetch(post) function to be passed from container and written there
  }

  render() {
    const { email, permissions } = this.state;

    const Checkbox = ({name}) => (
      <input
        name={name}
        type="checkbox"
        checked={permissions[name]}
        value={permissions[name]}
        onChange={this.handleCheckboxChange}
      />
    );

    return (
      <div className="box">
        <form>
          <input
            className="email-input"
            type="email"
            value={email}
            name="email"
            onFocus={this.clearInputOnFocus}
            onChange={this.handleInputChange}
          />
          <p>permissions</p>
          <div className="permissions-box">
            <div className="permissions">
              <span>read</span>
              <Checkbox name="read" />
            </div>
            <div className="permissions">
              <span>edit</span>
              <Checkbox name="edit" />
            </div>
            <div className="permissions">
              <span>approve</span>
              <Checkbox name="approve" />
            </div>
            <PlusButton click={this.handleSubmit} size={3} />

          </div>

        </form>
      </div>
    );
  }
}
