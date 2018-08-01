import React, { Component } from 'react';
import SideBarWrapper from './SideBar/SideBarWrapper';
import LocationsWrapper from './LocationsByClient.js/LocationsWrapper';
class MainWrapper extends Component {
    render() {
        return (
            <div className='mainWrapper'>
                <SideBarWrapper/>
                <LocationsWrapper/>
            </div>
        );
    }
}

export default MainWrapper;