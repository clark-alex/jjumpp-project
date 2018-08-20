import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  componentDidUpdate(prevProps) {
    const { filterItems, locations, state, addFilteredArray, search } = this.props;
    if (JSON.stringify(prevProps.state) !== JSON.stringify(state)) {
      const locationsCopy = locations.slice();
      let filteredByCountry = [];
      filterItems.forEach(filterItem => {
        filteredByCountry = locationsCopy.filter(location => location.address.country === Object.keys(filterItem)[0]);
      });
      filteredByCountry = filteredByCountry.length === 0 ? locationsCopy : filteredByCountry;
      let filteredByRating = [];
      let ratingNumber = 0;
      filterItems.forEach(filterItem => {
        filteredByRating = filteredByCountry.filter(location => {
          switch (Object.keys(filterItem)[0]) {
            case 'fiveStars':
              ratingNumber = 5;
              break;
            case 'fourStars':
              ratingNumber = 4;
              break;
            case 'threeStars':
              ratingNumber = 3;
              break;
            case 'twoStars':
              ratingNumber = 2;
              break;
            case 'oneStar':
              ratingNumber = 1;
              break;
            default:
              return 'noStars';
          }
          return ratingNumber === location.avg_rating;
        });
      });
      filteredByRating = ratingNumber === 0 ? filteredByCountry : filteredByRating;
      let filteredByIntegration = [];
      filterItems.forEach(filterItem => {
        filteredByIntegration = filteredByRating.filter(location => location[Object.keys(filterItem)[0]] === true);
      });
      console.log('filteredby', filteredByIntegration);
      filteredByIntegration = filteredByIntegration.length === 0 ? filteredByRating : filteredByIntegration;
      return filterItems.length === 0 ? addFilteredArray(locations) : addFilteredArray(filteredByIntegration);
    }
    if (prevProps.search !== search) {
      let searchLocations = [];
      locations.forEach(location => {
        const regex = new RegExp(search.toUpperCase().replace(/\s/g, ''), 'gm');
        const match = location.name
          .toUpperCase()
          .replace(/\s/g, '')
          .match(regex);
        if (match) {
          searchLocations.push(location);
        }
      });
      if (search === '') {
        searchLocations = locations;
      }
      addFilteredArray(searchLocations);
    }
  }

  render() {
    const { handleToggle, search, handleSearchInput, handleInput, state, handleRatingsInput } = this.props;
    return (
      <div className="SideBar flexColumn">
        <div className="flexRow closeSideBar">
          <button type="button" onClick={() => handleToggle('filterMenuToggle')}>
            <i className="material-icons">close</i>
          </button>
        </div>
        <section className="searchBar flexRow">
          <i className="material-icons">search</i>
          <input placeholder="search" name="search" value={search} onChange={handleSearchInput} />
        </section>
        <div className="innerBox">
          <h1>Filter Locations by</h1>
          <section>
            <h2>Country</h2>
            <div className="flexRow align">
              <input name="USA" onChange={handleInput} type="checkbox" />
              <h4 className={state.USA ? 'active' : 'disabled'}>United States</h4>
            </div>
            <div className="flexRow align">
              <input name="UK" onChange={handleInput} type="checkbox" />
              <h4 className={state.UK ? 'active' : 'disabled'}>United Kingdom</h4>
            </div>
            <div className="flexRow align">
              <input name="Canada" onChange={handleInput} type="checkbox" />
              <h4 className={state.Canada ? 'active' : 'disabled'}>Canada</h4>
            </div>
          </section>
          <section>
            <h2>Average Rating</h2>
            <div className="flexRow align">
              <input name="fiveStars" onChange={handleRatingsInput} type="checkbox" />
              <h4 className={state.fiveStars ? 'active' : 'disabled'}>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
              </h4>
            </div>
            <div className="flexRow align">
              <input name="fourStars" onChange={handleRatingsInput} type="checkbox" />
              <h4 className={state.fourStars ? 'active' : 'disabled'}>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
              </h4>
            </div>
            <div className="flexRow align">
              <input name="threeStars" onChange={handleRatingsInput} type="checkbox" />
              <h4 className={state.threeStars ? 'active' : 'disabled'}>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
              </h4>
            </div>
            <div className="flexRow align">
              <input name="twoStars" onChange={handleRatingsInput} type="checkbox" />
              <h4 className={state.twoStars ? 'active' : 'disabled'}>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
              </h4>
            </div>
            <div className="flexRow align">
              <input name="oneStar" onChange={handleRatingsInput} type="checkbox" />
              <h4 className={state.oneStar ? 'active' : 'disabled'}>
                <i className="material-icons">star</i>
              </h4>
            </div>
          </section>
          <section>
            <h3>Integrated With</h3>
            <div className="flexRow align">
              <input name="Facebook" onChange={handleInput} type="checkbox" />
              <h4 className={state.Facebook ? 'active' : 'disabled'}>Facebook</h4>
            </div>
            <div className="flexRow align">
              <input name="GoogleAnalytics" onChange={handleInput} type="checkbox" />
              <h4 className={state.GoogleAnalytics ? 'active' : 'disabled'}>Google Analytics</h4>
            </div>
            <div className="flexRow align">
              <input name="GoogleMyBusiness" onChange={handleInput} type="checkbox" />
              <h4 className={state.GoogleMyBusiness ? 'active' : 'disabled'}>Google My Business</h4>
            </div>
            <div className="flexRow align">
              <input name="InfusionSoft" onChange={handleInput} type="checkbox" />
              <h4 className={state.InfusionSoft ? 'active' : 'disabled'}>InfusionSoft</h4>
            </div>
            <div className="flexRow align">
              <input name="Twitter" onChange={handleInput} type="checkbox" />
              <h4 className={state.Twitter ? 'active' : 'disabled'}>Twitter</h4>
            </div>
            <div className="flexRow align">
              <input name="YouTube" onChange={handleInput} type="checkbox" />
              <h4 className={state.YouTube ? 'active' : 'disabled'}>YouTube</h4>
            </div>
            <div className="flexRow align">
              <input name="LinkedIn" onChange={handleInput} type="checkbox" />
              <h4 className={state.LinkedIn ? 'active' : 'disabled'}>Linkedin</h4>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default SideBar;
