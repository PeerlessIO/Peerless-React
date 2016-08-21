// React
import React, { Component } from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
  render() {
    return (    
        <div>
          <div>
            <TextField
              hintText="Username"
            />
          </div>
          <div>
            <TextField
              hintText="Password"
              type="password"
            />
          </div>
          <div>
            <RaisedButton label="Sign In" containerElement={<Link to="/dashboard" />} />
          </div>
        </div>
    );
  }
}

export default Login;
