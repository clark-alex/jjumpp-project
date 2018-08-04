import React, { Component } from 'react';
import SideBarWrapper from './SideBar/SideBarWrapper';
import LocationsHeader from './LocationsByClient.js/LocationsHeader';
import IndividualLocation from './LocationsByClient.js/IndividualLocation';
import axios from 'axios'
import AddLocation from './AddLocation';
import { getLocationInfo } from '../ducks/reducer';
import { connect } from 'react-redux';
class MainWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterMenuToggle: false,
            sortToggle: false,
            addLocation: false,
            locations: [],
            notifications: [],
            ratings: [],
            users: []
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.client_id !== this.props.client_id) {
            console.log(prevProps, this.props)
            this.props.getLocationInfo(this.props.client_id)
                .then(() => this.setState({
                    locations: this.props.locationInfo.locations,
                    notifications: this.props.locationInfo.notifications,
                    ratings: this.props.locationInfo.ratings,
                    users: this.props.locationInfo.users,

                }))
        }
    }
    // ==== LocationsHeader ====
    addLocationToggle = () => {
        this.setState({ addLocation: !this.state.addLocation })
    }
    // ==== sorting methods ====
    sortByLocationName = (title) => {
        // title will represent the title of what is to be sorted
        // this sort will sort by name. it will have to take into 
        // account first characters then numbers. 
        // if sort toggle is false then a->z else z->a

        // if ( title === notifications)
        console.log(title)
        let arrToSort = []
        const locations = this.state.locations.slice()
        locations.forEach(e => {
            arrToSort.push(e[title])
        });
        title === 'notifications' ?
            this.state.sortToggle ? arrToSort.sort((a, b) => a - b).reverse() : arrToSort.sort((a, b) => a - b)
            :
            this.state.sortToggle ? arrToSort.sort().reverse() : arrToSort.sort()
        console.log(arrToSort, locations[0].notifications)
        let sortedArray = []

        // arrToSort.forEach((sortedItem,i) => {

        //     // console.log(locations[locations[i][title.indexOf(sortedItem)]])
        //     console.log('fix me!',locations[i])
        //     // console.log(locations[i].indexOf(sortedItem))
        // })
        arrToSort.forEach((sortedItem, i) => {
            locations.forEach((location, j) => {
                if (sortedItem === location[title]) {
                    console.log(i, j)

                    sortedArray.push(location)
                }
            })
        })
        this.setState({
            locations: sortedArray,
            sortToggle: !this.state.sortToggle
        })
    }




    render() {
        console.log('main state', this.state)
        let locations = this.state.locations ?
            this.state.locations.map((e, i) => {
                return (
                    <div key={i}>
                        <IndividualLocation
                            name={e.name}
                            address={e.address}
                            ID={e._id}
                            last_managed={e.last_managed}
                            notifications={e.notifications}
                            users={this.state.users}
                            usersID={e.users}
                        />
                    </div>
                )
            })
            : null
        return (

            <div className='mainWrapper flexRow'>
                {this.state.addLocation ? <AddLocation /> : null}
                {this.state.filterMenuToggle ? <SideBarWrapper /> : null}
                <div className='LocationsWrapper'>
                    <LocationsHeader
                        locations={this.state.locations}
                        sortByLocationName={this.sortByLocationName}
                        addLocationToggle={this.addLocationToggle}
                        addLocation={this.state.addLocation}
                    />
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