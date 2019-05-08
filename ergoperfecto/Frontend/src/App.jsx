import React, { Component } from 'react';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faSearch, faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faSearch);
library.add(faMinus);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
