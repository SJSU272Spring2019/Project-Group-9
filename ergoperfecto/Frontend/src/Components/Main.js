import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import SignIn from './Components/SignIn';
// import SignUp from './Components/SignUp';
import Header from './Navigation/Header';
import Login from './Navigation/Login';
import ProductDisplay from './Navigation/ProductDisplay'
// import '../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path = "/" component = {Header} />
        <Route path = "/productdisplay" component = {ProductDisplay} />
        <Route path = "/login" component = {Login} />
      </div>
    );
  }
}

export default Main;
