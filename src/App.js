import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
