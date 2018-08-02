import React, { Component } from 'react';
import SideBarWrapper from './SideBar/SideBarWrapper';
import LocationsHeader from './LocationsByClient.js/LocationsHeader';
import IndividualLocation from './LocationsByClient.js/IndividualLocation';
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
        let locations = this.props.locationInfo.locations?
        this.props.locationInfo.locations.map(e=>{
            return (
                <div>
                <IndividualLocation
                    name={e.name} 
                    address={e.address}
                    ID={e._id}
                    last_managed={e.last_managed}
                    notifications={e.notifications}
                    users={this.props.locationInfo.users}
                    usersID={e.users}
                />
                </div>
            )
        })
        :null
        return (
            <div className='mainWrapper flexRow'>
                <SideBarWrapper />
                <div className='LocationsWrapper'>
                <LocationsHeader/>
                {locations}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        locationInfo: state.locationInfo
    }
}

export default connect(mapStateToProps, { getLocationInfo })(MainWrapper);