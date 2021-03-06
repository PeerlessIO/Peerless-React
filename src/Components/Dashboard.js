// React
import React, { Component } from 'react';
import { Link } from 'react-router';

// Material-UI Componnets
import RaisedButton from 'material-ui/RaisedButton';

class Dashboard extends Component {
  render() {
    return (    
        <div>
          <div>
            This is the user dashboard component!
          </div>
          <div>
            <RaisedButton label="Search" containerElement={<Link to="/projectlist" />} />
          </div>
        </div>
    );
  }
}

export default Dashboard;
