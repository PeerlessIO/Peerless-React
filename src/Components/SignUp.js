// React
import React, { Component } from 'react';
import { Link } from 'react-router';

// Material-UI Componnets
import RaisedButton from 'material-ui/RaisedButton';

class SignUp extends Component {
  render() {
    return (    
        <div>
          <div>
            This is the sign up component!
          </div>
          <div>
            <RaisedButton label="Done" containerElement={<Link to="/dashboard" />} />
          </div>
        </div>
    );
  }
}

export default SignUp;
