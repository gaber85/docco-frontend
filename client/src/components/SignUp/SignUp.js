import React, {Component} from 'react';
import redux from 'react-redux';

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
    return (<form>
      <div className="user-name">
      <input type="text" className="first-name" />
      <input type="text" className="last-name" value={this.state.user.last} placeholder="First Name" />

      </div>




      </form>



      )
  }


}


export default SignUp;