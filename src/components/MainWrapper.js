import React, { Component } from 'react';
import SideBar from './SideBar/SideBar';
import LocationsHeader from './LocationsByClient.js/LocationsHeader';
import IndividualLocation from './LocationsByClient.js/IndividualLocation';
import axios from 'axios'
import _ from 'lodash'
import AddLocation from './AddLocation';
import { getLocationInfo } from '../ducks/reducer';
import { connect } from 'react-redux';
class MainWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterButtonToggle: false,
            filterMenuToggle: true,
            sortToggle: false,
            addLocation: false,
            sorted: false,
            locations: [],
            notifications: [],
            ratings: [],
            users: [],
            // ===filter state===
            search: '',
            USA: false,
            UK: false,
            Canada: false,
            Facebook: false,
            GoogleAnalytics: false,
            GoogleMyBusiness: false,
            InfusionSoft: false,
            Twitter: false,
            YouTube: false,
            LinkedIn: false,
            fiveStars: false,
            fourStars: false,
            threeStars: false,
            twoStars: false,
            oneStar: false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.client_id !== this.props.client_id) {
            this.props.getLocationInfo(this.props.client_id)
                .then(() => this.setState({
                    locations: this.props.locationInfo.locations,
                    notifications: this.props.locationInfo.notifications,
                    ratings: this.props.locationInfo.ratings,
                    users: this.props.locationInfo.users,

                }))
        }
    }
    addLocationFn = (location) => {
        let stateCopy = [...this.state.locations]
        stateCopy.push(location)
        console.log(stateCopy)
        this.setState({
            locations: stateCopy,
            addLocation: false
        })
    }

    // ==== sorting method ====
    sortByLocationName = (title) => {
        // title will represent the title of what is to be sorted
        // this sort will sort by name. it will have to take into 
        // account first characters then numbers. 
        const locationsCopy = this.state.locations.slice()

        title === 'notifications'
            ?
            locationsCopy.sort(function (a, b) {
                return a.notifications - b.notifications;
            })
            :
            title === 'last_managed' ?

                locationsCopy.sort(function (a, b) {
                    return +Date.parse(a.last_managed) - +Date.parse(b.last_managed);
                })
                :
                // sort by name
                locationsCopy.sort(function (a, b) {
                    var nameA = a.name.toUpperCase().replace(/\s/g, ''); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase().replace(/\s/g, ''); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
        this.state.sorted ?
            this.setState({ locations: locationsCopy.reverse(), sorted: false })
            :
            this.setState({ locations: locationsCopy, sorted: true })


    }

    // ==== filter menu ====
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.checked, filterButtonToggle: false })
        this.forceUpdate()
    }
    handleSearchInput = (e) => {
        this.setState({ [e.target.name]: e.target.value, filterButtonToggle: false })
    }
    handleRatingsInput = (e) => {

        this.setState({ filterButtonToggle: false, [e.target.name]: !this.state[e.target.name] })
    }
    handleToggle = (toggleItem) => {
        this.setState({ [toggleItem]: !this.state[toggleItem] })
    }


    filterLocations = () => {
        this.state.filterButtonToggle ?
            this.setState({
                avgRatings: [],
                USA: false,
                UK: false,
                Canada: false,
                avgRatings: [],
                Facebook: false,
                GoogleAnalytics: false,
                GoogleMyBusiness: false,
                InfusionSoft: false,
                Twitter: false,
                YouTube: false,
                LinkedIn: false,
                locations: this.props.locationInfo.locations
            })
            :
            this.filterFunction()
    }
    itemsToFilter() {
        const { USA, UK, Canada, Facebook, GoogleAnalytics, GoogleMyBusiness, InfusionSoft, Twitter, YouTube, LinkedIn, fiveStars, fourStars, threeStars, twoStars, oneStar } = this.state
        let filterItems = [{ USA }, { UK }, { Canada }, { Facebook }, { GoogleAnalytics }, { GoogleMyBusiness }, { InfusionSoft }, { Twitter }, { YouTube }, { LinkedIn }, { fiveStars }, { fourStars }, { threeStars }, { twoStars }, { oneStar }].filter(e => {
            return e[Object.keys(e)] === true
        })
        return filterItems
    }
    addFilteredArray = (filteredArray) => {
        this.setState({ locations: filteredArray })
    }
    render() {
        const { USA, UK, Canada, Facebook, GoogleAnalytics, GoogleMyBusiness, InfusionSoft, Twitter, YouTube, LinkedIn, fiveStars, fourStars, threeStars, twoStars, oneStar } = this.state
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
                {this.state.addLocation ? <AddLocation handleToggle={this.handleToggle} addLocationFn={this.addLocationFn} /> : null}
                {this.state.filterMenuToggle && this.props.locationInfo.locations ?
                    <SideBar
                        state={{ USA, UK, Canada, Facebook, GoogleAnalytics, GoogleMyBusiness, InfusionSoft, Twitter, YouTube, LinkedIn, fiveStars, fourStars, threeStars, twoStars, oneStar }}
                        filterLocations={this.filterLocations}
                        handleInput={this.handleInput}
                        handleRatingsInput={this.handleRatingsInput}
                        filterButtonToggle={this.state.filterButtonToggle}
                        handleSearchInput={this.handleSearchInput}
                        search={this.state.search}
                        handleToggle={this.handleToggle}
                        locations={this.props.locationInfo.locations}
                        filterItems={this.itemsToFilter()}
                        addFilteredArray={this.addFilteredArray}



                    /> : null}
                <div className={'LocationsWrapper'} style={!this.state.filterMenuToggle ? { width: '90vw' } : null}>
                    <LocationsHeader
                        locations={this.state.locations}
                        sortByLocationName={this.sortByLocationName}
                        handleToggle={this.handleToggle}



                    />
                    <div style={{ height: '70vh', overflow: 'scroll' }}>
                        {locations}
                    </div>
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