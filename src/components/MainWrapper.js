import React, { Component } from 'react';
import SideBarWrapper from './SideBar/SideBarWrapper';
import LocationsWrapper from './LocationsByClient.js/LocationsWrapper';
import axios from 'axios'
import { getLocationInfo } from '../ducks/reducer'
import { connect } from 'react-redux';
class MainWrapper extends Component {
    constructor(props) {
        super(props);

    }
    componentDidUpdate(prevProps) {
        if (prevProps.client_id !== this.props.client_id) {
            console.log(prevProps, this.props)
            this.props.getLocationInfo(this.props.client_id)
        }
    }
    render() {
        console.log(this.props)
        console.log('!!!!')
        return (
            <div className='mainWrapper flexRow'>
                <SideBarWrapper />
                <LocationsWrapper />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps, { getLocationInfo })(MainWrapper);