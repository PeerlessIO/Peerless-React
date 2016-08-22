// React
import React, { Component } from 'react';
import { Link } from 'react-router';

// Material-UI Componnets
import RaisedButton from 'material-ui/RaisedButton';

class ProjectList extends Component {
  render() {
    return (    
        <div>
          <div>
            This is the projects search & list component!
          </div>
          <div>
            <RaisedButton label="Select" containerElement={<Link to="/projectdetail" />} />
          </div>
        </div>
    );
  }
}

export default ProjectList;
