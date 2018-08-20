import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MainWrapper from './components/MainWrapper';
import NavBar from './components/NavBar';
import { getUser } from './ducks/reducer';
import './App.css';
import './reset.css';

class App extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <NavBar first_name={user.first_name} last_name={user.last_name} />
        <MainWrapper clientId={user.clientId} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(
  mapStateToProps,
  { getUser }
)(App);
