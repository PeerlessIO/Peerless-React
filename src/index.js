// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Styles
import './index.css';

// Part of Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Material-UI Themes
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Import Components
import App from './App.js';
import Login from './Components/Login.js';
import Landing from './Components/Landing.js';

class Main extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Router history={ hashHistory }>
            <Route path="/" component={App}>
              <IndexRoute component={Landing}></IndexRoute>
              <Route path="login" component={Login}></Route>
            </Route>
          </Router>
        </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
