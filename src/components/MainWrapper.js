import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SideBar from './SideBar/SideBar';
import LocationsHeader from './LocationsByClient.js/LocationsHeader';
import IndividualLocation from './LocationsByClient.js/IndividualLocation';
import Loading from './Loading';
import AddLocation from './AddLocation';
import { getLocationInfo, addLocation } from '../ducks/reducer';

class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterButtonToggle: false,
      filterMenuToggle: false,
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
      oneStar: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { clientId } = this.props;
    if (prevProps.clientId !== clientId) {
      const { getLocationInfo } = this.props;
      getLocationInfo(clientId).then(() => {
        const { locationInfo } = this.props;
        this.setState({
          locations: locationInfo.locations,
          notifications: locationInfo.notifications,
          ratings: locationInfo.ratings,
          users: locationInfo.users,
        });
      });
    }
  }

  addLocationFn = location => {
    const { locations } = this.state;
    const { addLocation } = this.props;
    const stateCopy = locations.slice();
    stateCopy.push(location);
    addLocation({ locations: stateCopy });
    this.setState({
      locations: stateCopy,
      addLocation: false,
    });
  };

  // ==== sorting method ====
  sortByLocationName = title => {
    // title will represent the title of what is to be sorted
    // this sort will sort by name. it will have to take into
    // account first characters then numbers.
    const { locations, sorted } = this.state;
    const locationsCopy = locations.slice();

    if (title === 'notifications') locationsCopy.sort((a, b) => a.notifications - b.notifications);
    else if (title === 'last_managed')
      locationsCopy.sort((a, b) => +Date.parse(a.last_managed) - +Date.parse(b.last_managed));
    else
      locationsCopy.sort((a, b) => {
        const nameA = a.name.toUpperCase().replace(/\s/g, ''); // ignore upper and lowercase and whitespace
        const nameB = b.name.toUpperCase().replace(/\s/g, ''); // ignore upper and lowercase and whitespace
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

    return sorted
      ? this.setState({ locations: locationsCopy.reverse(), sorted: false })
      : this.setState({ locations: locationsCopy, sorted: true });
  };

  // ==== filter menu ====
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.checked, filterButtonToggle: false });
  };

  handleSearchInput = e => {
    this.setState({ [e.target.name]: e.target.value, filterButtonToggle: false });
  };

  handleRatingsInput = e => {
    this.setState({ filterButtonToggle: false, [e.target.name]: !this.state[e.target.name] });
  };

  handleToggle = toggleItem => {
    this.setState({ [toggleItem]: !this.state[toggleItem] });
  };

  filterLocations = () =>
    this.state.filterButtonToggle
      ? this.setState({
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
          locations: this.props.locationInfo.locations,
        })
      : this.filterFunction();

  addFilteredArray = filteredArray => {
    this.setState({ locations: filteredArray });
  };

  itemsToFilter() {
    const {
      USA,
      UK,
      Canada,
      Facebook,
      GoogleAnalytics,
      GoogleMyBusiness,
      InfusionSoft,
      Twitter,
      YouTube,
      LinkedIn,
      fiveStars,
      fourStars,
      threeStars,
      twoStars,
      oneStar,
    } = this.state;
    const filterItems = [
      { USA },
      { UK },
      { Canada },
      { Facebook },
      { GoogleAnalytics },
      { GoogleMyBusiness },
      { InfusionSoft },
      { Twitter },
      { YouTube },
      { LinkedIn },
      { fiveStars },
      { fourStars },
      { threeStars },
      { twoStars },
      { oneStar },
    ].filter(e => e[Object.keys(e)] === true);
    return filterItems;
  }

  render() {
    const {
      USA,
      UK,
      Canada,
      Facebook,
      GoogleAnalytics,
      GoogleMyBusiness,
      InfusionSoft,
      Twitter,
      YouTube,
      LinkedIn,
      fiveStars,
      fourStars,
      threeStars,
      twoStars,
      oneStar,
    } = this.state;
    const locations = this.state.locations
      ? this.state.locations.map((e, i) => (
          <div key={e.name}>
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
        ))
      : null;
    return (
      <Loading loadingParam={this.state.locations.length}>
        <div className="mainWrapper flexRow">
          {this.state.addLocation ? (
            <AddLocation handleToggle={this.handleToggle} addLocationFn={this.addLocationFn} />
          ) : null}
          {this.state.filterMenuToggle && this.props.locationInfo.locations ? (
            <SideBar
              state={{
                USA,
                UK,
                Canada,
                Facebook,
                GoogleAnalytics,
                GoogleMyBusiness,
                InfusionSoft,
                Twitter,
                YouTube,
                LinkedIn,
                fiveStars,
                fourStars,
                threeStars,
                twoStars,
                oneStar,
              }}
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
            />
          ) : null}
          <div className="LocationsWrapper" style={!this.state.filterMenuToggle ? { width: '90vw' } : null}>
            <LocationsHeader
              locations={this.state.locations}
              sortByLocationName={this.sortByLocationName}
              handleToggle={this.handleToggle}
            />
            <div style={{ height: '70vh', overflow: 'scroll' }}>{locations}</div>
          </div>
        </div>
      </Loading>
    );
  }
}
function mapStateToProps(state) {
  return {
    locationInfo: state.locationInfo,
  };
}

export default connect(
  mapStateToProps,
  { getLocationInfo, addLocation }
)(MainWrapper);
