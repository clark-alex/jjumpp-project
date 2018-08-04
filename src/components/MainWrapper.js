import React, { Component } from 'react';
import SideBar from './SideBar/SideBar';
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
            filterMenuToggle: true,
            sortToggle: false,
            addLocation: false,
            locations: [],
            notifications: [],
            ratings: [],
            users: [],
            // ===filter state===
            USA: false,
            Uk: false,
            Canada: false,
            fiveStars: false,
            fourStars: false,
            threeStars: false,
            twoStars: false,
            oneStar: false,
            facebook: false,
            googleAnalytics: false,
            googleMyBusiness: false,
            infusionSoft: false,
            twitter: false,
            youTube: false,
            linkedIn: false


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
    handleToggle = (toggleItem) => {
        this.setState({ [toggleItem]: !this.state[toggleItem] })
    }
    // ==== sorting method ====
    sortByLocationName = (title) => {
        // title will represent the title of what is to be sorted
        // this sort will sort by name. it will have to take into 
        // account first characters then numbers. 
        // if sort toggle is false then a->z else z->a

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
    // ==== filter menu ====
    handleInput = (e) => {
            this.setState({ [e.target.name]: e.target.checked })
            this.filterLocations
    }
    filterLocations = () => {
        const { USA, Uk, Canada, fiveStars, fourStars, threeStars, twoStars, oneStar, facebook, googleAnalytics, googleMyBusiness, infusionSoft, twitter, youTube, linkedIn } = this.state
        const countryArr=[{USA}, {Uk}, {Canada}]
        const ratingsArr=[{fiveStars}, {fourStars}, {threeStars}, {twoStars}, {oneStar}]
        const integratedArr=[{facebook}, {googleAnalytics}, {googleMyBusiness}, {infusionSoft}, {twitter}, {youTube}, {linkedIn}]
      console.log(countryArr.filter((e,i)=>{
          return e[Object.keys(e)]===true
        }))
        console.log('!filter!')    
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
                    {this.state.filterMenuToggle ?
                        <SideBar
                            handleInput={this.handleInput}
                            filterLocations={this.filterLocations}
                        /> : null}
                    <div className='LocationsWrapper'>
                        <LocationsHeader
                            locations={this.state.locations}
                            sortByLocationName={this.sortByLocationName}
                            handleToggle={this.handleToggle}
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