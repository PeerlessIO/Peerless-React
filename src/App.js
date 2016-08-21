// React
import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

// Material-UI Components
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class App extends Component {
  render() {
    return (    
        <div>
          <Toolbar>
            <ToolbarGroup>
              <Link to="/">
                <ToolbarTitle text="Peerless" />
              </Link>
            </ToolbarGroup>
            <ToolbarGroup>
              <FlatButton label="Login" containerElement={<Link to="/login" />} />
              <FlatButton label="Sign up" />
            </ToolbarGroup>
          </Toolbar>
          {this.props.children}
        </div>
    );
  }
}

export default App;
