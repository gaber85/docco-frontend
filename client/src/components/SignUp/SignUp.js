import React, {Component} from 'react';

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
    return (<form>
      <div className="user-name">
      <input type="text" className="first-name" />
      <input type="text" className="last-name" value={user.last} placeholder="First Name" />
      </div>
      </form>
    )
  }
}


export default SignUp;