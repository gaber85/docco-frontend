import React, { Component } from 'react';
import PlusButton from '../PlusButton';
import './AddMember.css';

export default class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    // add user to state
  };

  render() {
    const { email, permissions } = this.state;

    const Checkbox = ({ name }) => (
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
        <form className="form">
          <input
            className="email-input"
            type="email"
            value={email}
            name="email"
            onChange={this.handleInputChange}
            placeholder="email..."
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
          </div>
        </form>
        <div className='button'>
          <PlusButton size="2" />
        </div>
      </div>
    );
  }
}
