import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import MainWrapper from './components/MainWrapper';
import NavBar from './components/NavBar';

import './App.css';
import './reset.css'; 
class App extends Component {
  // componentDidMount(){
  //   axios.post('/dummydata/addLocation')
  //   axios.post('/dummydata/addRatings')
  //   axios.post('/dummydata/addNotifications')
  //   axios.post('/dummydata/addClient')
  // }
  render() {
    return (
      <div className="App">
        <NavBar first_name={'Alex'} last_name={'Clark'} />
        <MainWrapper />
      </div>
    );
  }
}

export default App;
