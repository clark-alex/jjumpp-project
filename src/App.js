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

  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <div className="App">
        <NavBar first_name={this.props.user.first_name} last_name={this.props.user.last_name} />
        <MainWrapper client_id={this.props.user.client_id}/>
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
