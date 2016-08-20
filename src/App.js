import React, { Component } from 'react';
import './App.css';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class App extends Component {
  render() {
    return (    
        <div>
          <TextField
            hintText="Username"
          />
          <TextField
            hintText="Password"
          />
          <RaisedButton label="Sign In" />
        </div>
    );
  }
}

export default App;
