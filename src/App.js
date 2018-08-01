import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import MainWrapper from './components/MainWrapper';
import NavBar from './components/NavBar';
import {connect} from 'react-redux';
import {getUser} from './ducks/reducer';

import './App.css';
import './reset.css'; 
class App extends Component {
  // componentDidMount(){
  //   axios.post('/dummydata/addLocation')
  //   axios.post('/dummydata/addRatings')
  //   axios.post('/dummydata/addNotifications')
  //   axios.post('/dummydata/addClient')
  // }
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBar first_name={this.props.user.first_name} last_name={this.props.user.last_name} />
        <MainWrapper />
        test
        {this.props.user.first_name}
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, {getUser})(App);
