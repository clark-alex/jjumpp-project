import React, { Component } from 'react';
import SideBarWrapper from './SideBar/SideBarWrapper';
import LocationsWrapper from './LocationsByClient.js/LocationsWrapper';
import {connect} from 'react-redux';
class MainWrapper extends Component {
  
    render() {
        return (
            <div className='mainWrapper flexRow'>
                <SideBarWrapper/>
                <LocationsWrapper/>
            </div>
        )
    }
}

export default (MainWrapper);