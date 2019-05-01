import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import SignIn from './Components/SignIn';
// import SignUp from './Components/SignUp';
import Header from './Navigation/Header';
import Login from './Navigation/Login';
import ProductDisplay from './Body/ProductDisplay'
import Profile from './Dashboard/Profile';
import Evaluation from './Dashboard/Evaluation';
import VideoDisplay from './Body/VideoDisplay'
import Dashboard from './Dashboard/Dashboard'
// import '../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path = "/" component = {Header} />
        <Route path = "/productdisplay" component = {ProductDisplay} />
        <Route path = "/videodisplay" component = {VideoDisplay} />
        <Route path = "/login" component = {Login} />
        <Route path = "/dashboard" component = {Dashboard} />
      </div>
    );
  }
}



export default Main;
