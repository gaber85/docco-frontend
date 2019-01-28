import React, { Component } from 'react';
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

  render() {
    const { email, permissions } = this.state;

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
              <input
                name="read"
                type="checkbox"
                checked={permissions.read}
                value={permissions.read}
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className="permissions">
              <span>edit</span>
              <input
                name="edit"
                type="checkbox"
                checked={permissions.edit}
                value={permissions.edit}
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className="permissions">
              <span>approve</span>
              <input
                name="approve"
                type="checkbox"
                checked={permissions.approve}
                value={permissions.approve}
                onChange={this.handleCheckboxChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
