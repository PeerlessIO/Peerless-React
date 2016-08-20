import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

class Main extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <App />
        </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
