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
import physio from './Dashboard/physio';
import singleitem from './Dashboard/singleitem'
import Home from './Navigation/Home'
import Chatbot from './Navigation/Chatbot';
// import '../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path = "/" component = {Home} />
        <Route path = "/productdisplay" component = {ProductDisplay} />
        <Route path = "/videodisplay" component = {VideoDisplay} />
        <Route path = "/login" component = {Login} />
        <Route path = "/dashboard" component = {Dashboard} />
        <Route path = "/physio" component = {physio} />
        <Route path = "/singleitem/:name" component = {singleitem} />
        <Route path = "/home" component = {Home} />
        <Route path = "/chatbot" component = {Chatbot} />
      </div>
    );
  }
}



export default Main;
