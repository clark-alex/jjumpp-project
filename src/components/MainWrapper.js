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
            locations: [],
            notifications: [],
            ratings: [],
            users: [],
            // ===filter state===
            search: '',
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
        // if (prevState !== this.state) {
        //     this.filterLocations()
        // }
    }

    // ==== sorting method ====
    sortByLocationName = (title) => {
        // title will represent the title of what is to be sorted
        // this sort will sort by name. it will have to take into 
        // account first characters then numbers. 
        // if sort toggle is false then a->z else z->a

        let arrToSort = []
        const locations = this.state.locations.slice()
        locations.forEach(e => {
            arrToSort.push(e[title])
        });
        title === 'notifications' ?
            this.state.sortToggle ? arrToSort.sort((a, b) => a - b).reverse() : arrToSort.sort((a, b) => a - b)
            :
            this.state.sortToggle ? arrToSort.sort().reverse() : arrToSort.sort()
        let sortedArray = []
        arrToSort.forEach((sortedItem, i) => {
            locations.forEach((location, j) => {
                if (sortedItem === location[title]) {
                    sortedArray.push(location)
                }
            })
        })
        this.setState({
            locations: _.uniq(sortedArray,'name'),
            filterButtonToggle: !this.state.filterButtonToggle
        })
    }
    // ==== filter menu ====
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.checked, filterButtonToggle: false })
    }
    handleSearchInput = (e) => {
        this.setState({ [e.target.name]: e.target.value, filterButtonToggle: false })
    }
    handleRatingsInput = (e) => {
        if (e.target.name === 'fiveStars' && e.target.checked === true) {
            this.setState((prevState) => {
                let newAvg = prevState.avgRatings.slice()
                newAvg.push(5)
                return { avgRatings: newAvg }
            })
        }
        if (e.target.name === 'fourStars' && e.target.checked === true) {
            this.setState((prevState) => {
                let newAvg = prevState.avgRatings.slice()
                newAvg.push(4)
                return { avgRatings: newAvg }
            })
        }
        if (e.target.name === 'threeStars' && e.target.checked === true) {
            this.setState((prevState) => {
                let newAvg = prevState.avgRatings.slice()
                newAvg.push(3)
                return { avgRatings: newAvg }
            })
        }
        if (e.target.name === 'twoStars' && e.target.checked === true) {
            this.setState((prevState) => {
                let newAvg = prevState.avgRatings.slice()
                newAvg.push(2)
                return { avgRatings: newAvg }
            })
        }
        if (e.target.name === 'oneStar' && e.target.checked === true) {
            this.setState((prevState) => {
                let newAvg = prevState.avgRatings.slice()
                newAvg.push(1)
                return { avgRatings: newAvg }
            })
        }
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
    filterFunction() {
        const { USA, UK, Canada, Facebook, GoogleAnalytics, GoogleMyBusiness, InfusionSoft, Twitter, YouTube, LinkedIn, avgRatings, fiveStars, fourStars, threeStars, twoStars, oneStar } = this.state
        let countryArr = [{ USA }, { UK }, { Canada }].filter((e, i) => { return e[Object.keys(e)] === true })
        let ratingsArr = [{ fiveStars }, { fourStars }, { threeStars }, { twoStars }, { oneStar }].filter((e, i) => { return e[Object.keys(e)] === true })
        let integratedArr = [{ Facebook }, { GoogleAnalytics }, { GoogleMyBusiness }, { InfusionSoft }, { Twitter }, { YouTube }, { LinkedIn }].filter((e, i) => { return e[Object.keys(e)] === true })
        let filteredArray = []
        if (this.state.search) {
            this.props.locationInfo.locations.forEach(location => {
                if (location.name.toLowerCase() === this.state.search.toLowerCase()) {
                    filteredArray.push(location)
                }
            })
        }


        if (countryArr.length > 0) {
            this.props.locationInfo.locations.forEach(location => {
                countryArr.forEach(e => {
                    if (location.address.country === Object.keys(e)[0]) {
                        filteredArray.push(location)
                    }
                })
            })
        }
        if (avgRatings.length > 0) {
            this.props.locationInfo.locations.forEach(location => {
                avgRatings.forEach(e => {
                    if (location.avg_rating === e) {
                        filteredArray.push(location)
                    }
                })
            })
        }
        if (integratedArr.length > 0) {
            this.props.locationInfo.locations.forEach(location => {
                integratedArr.forEach(integrated => {
                    if (location[Object.keys(integrated)[0]]) {
                        filteredArray.push(location)
                    }
                })
            })
        }
        if (countryArr.length === 0 && integratedArr.length === 0 && ratingsArr.length === 0 && !this.state.search) {
            this.setState({ locations: this.props.locationInfo.locations })
        } else { this.setState({ locations: _.uniqBy(filteredArray, 'name'), filterButtonToggle: !this.state.filterButtonToggle }) }
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
                {this.state.addLocation ? <AddLocation handleToggle={this.handleToggle} /> : null}
                {this.state.filterMenuToggle ?
                    <SideBar
                        state={{ USA, UK, Canada, Facebook, GoogleAnalytics, GoogleMyBusiness, InfusionSoft, Twitter, YouTube, LinkedIn, fiveStars, fourStars, threeStars, twoStars, oneStar }}
                        filterLocations={this.filterLocations}
                        handleInput={this.handleInput}
                        handleRatingsInput={this.handleRatingsInput}
                        filterButtonToggle={this.state.filterButtonToggle}
                        handleSearchInput={this.handleSearchInput}
                        search={this.state.search}


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