// React
import React, { Component } from 'react';

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
            <RaisedButton label="Sign In" />
          </div>
        </div>
    );
  }
}

export default Login;
