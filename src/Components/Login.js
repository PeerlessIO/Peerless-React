// React
import React from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Login = React.createClass({
  
  handleSignIn: function() {
    console.log(`Logging in with {Username: ${this.refs.usernameInput.getValue()}, Password: ${this.refs.passwordInput.getValue()})}`);
  },

  render: function() {
    return (    
        <div>
          <div>
            <TextField
              ref='usernameInput'
              hintText='Username'
            />
          </div>
          <div>
            <TextField
              ref='passwordInput'
              hintText="Password"
              type="password"
            />
          </div>
          <div>
            <RaisedButton 
              label="Sign In" 
              containerElement={<Link to="/dashboard" />} 
              onClick={this.handleSignIn}/>
          </div>
        </div>
    );
  }

});

export default Login;
