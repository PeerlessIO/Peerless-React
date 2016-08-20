import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import './App.css';
import Test from './Components/Test.js';

// Part of Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



















const Home = (props) => <div><h1>Home</h1><Links/>{props.children}</div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{color: 'green'}} to="/">Home</Link>
    <Link activeStyle={{color: 'green'}} to="/about">About</Link>
    <Link activeStyle={{color: 'green'}} to="/contact">Contact</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <div>
        <Router history={ hashHistory }>
          <Route path="/" component={Home}>
            <Route path="about" component={About}></Route>
            <Route path="contact" component={Contact}></Route>
          </Route>
        </Router>
        <Test></Test>
      </div>
    );
  }
}

export default App;
