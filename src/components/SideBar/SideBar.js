import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.state) !== JSON.stringify(this.props.state)) {
            const shouldFilter = this.props.filterItems.length !== 0
            const locationsCopy = this.props.locations
            let filteredByCountry = []
            this.props.filterItems.forEach(filterItem => {
                filteredByCountry = locationsCopy.filter(location => {
                    return location.address.country === Object.keys(filterItem)[0]
                })
            })
            filteredByCountry = filteredByCountry.length === 0 ? locationsCopy : filteredByCountry
            let filteredByRating = []
            let ratingNumber = 0
            this.props.filterItems.forEach(filterItem => {
                filteredByRating = filteredByCountry.filter(location => {
                    switch (Object.keys(filterItem)[0]) {
                        case 'fiveStars': ratingNumber = 5; break;
                        case 'fourStars': ratingNumber = 4; break;
                        case 'threeStars': ratingNumber = 3; break;
                        case 'twoStars': ratingNumber = 2; break;
                        case 'oneStar': ratingNumber = 1; break;
                    }
                       return  ratingNumber === location.avg_rating
                })
            })
            filteredByRating = ratingNumber === 0 ? filteredByCountry : filteredByRating
            let filteredByIntegration = []
            this.props.filterItems.forEach(filterItem => {
                filteredByIntegration= filteredByRating.filter(location => {
                    return location[Object.keys(filterItem)[0]]===true
                })
            })
            this.props.filterItems.length === 0 ?
                this.props.addFilteredArray(this.props.locations)
                :
                this.props.addFilteredArray(filteredByIntegration)

        }
        if (prevProps.search !== this.props.search) {
            let searchLocations = []
            this.props.locations.forEach(location => {
                let regex = new RegExp(this.props.search.toUpperCase().replace(/\s/g, ''), 'gm')
                let match = location.name.toUpperCase().replace(/\s/g, '').match(regex)
                if (match) { searchLocations.push(location) }
            })
            if (this.props.search === '') { searchLocations = this.props.locations }
            console.log(searchLocations, this.props.search)
            this.props.addFilteredArray(searchLocations)

        }
    }
    render() {
        return (
            <div className='SideBar flexColumn' >
                <div className='flexRow closeSideBar'>
                    <i onClick={() => this.props.handleToggle('filterMenuToggle')} class="material-icons">close</i>
                </div>
                <section className='searchBar flexRow' >
                    <i class="material-icons">search</i>
                    <input placeholder='search' name='search' value={this.props.search} onChange={this.props.handleSearchInput} />
                </section>
                <div className='innerBox'>
                    <h1>Filter Locations by</h1>
                    <section>
                        <h2>Country</h2>
                        <div className='flexRow align'>
                            <input name='USA' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.USA ? 'active' : 'disabled'}>United States</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='UK' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.UK ? 'active' : 'disabled'}>United Kingdom</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='Canada' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.Canada ? 'active' : 'disabled'}>Canada</h4>
                        </div>
                    </section>
                    <section>
                        <h2>Average Rating</h2>
                        <div className='flexRow align'>
                            <input name='fiveStars' onChange={this.props.handleRatingsInput} type='checkbox' />
                            <h4 className={this.props.state.fiveStars ? 'active' : 'disabled'}>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                            </h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='fourStars' onChange={this.props.handleRatingsInput} type='checkbox' />
                            <h4 className={this.props.state.fourStars ? 'active' : 'disabled'}>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                            </h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='threeStars' onChange={this.props.handleRatingsInput} type='checkbox' />
                            <h4 className={this.props.state.threeStars ? 'active' : 'disabled'}>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                            </h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='twoStars' onChange={this.props.handleRatingsInput} type='checkbox' />
                            <h4 className={this.props.state.twoStars ? 'active' : 'disabled'}>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                            </h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='oneStar' onChange={this.props.handleRatingsInput} type='checkbox' />
                            <h4 className={this.props.state.oneStar ? 'active' : 'disabled'}>
                                <i class="material-icons">star</i>
                            </h4>
                        </div>
                    </section>
                    <section>
                        <h3>Integrated With</h3>
                        <div className='flexRow align'>
                            <input name='Facebook' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.Facebook ? 'active' : 'disabled'}>Facebook</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='GoogleAnalytics' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.GoogleAnalytics ? 'active' : 'disabled'}>Google Analytics</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='GoogleMyBusiness' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.GoogleMyBusiness ? 'active' : 'disabled'}>Google My Business</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='InfusionSoft' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.InfusionSoft ? 'active' : 'disabled'}>InfusionSoft</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='Twitter' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.Twitter ? 'active' : 'disabled'}>Twitter</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='YouTube' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.YouTube ? 'active' : 'disabled'}>YouTube</h4>
                        </div>
                        <div className='flexRow align'>
                            <input name='LinkedIn' onChange={this.props.handleInput} type='checkbox' />
                            <h4 className={this.props.state.LinkedIn ? 'active' : 'disabled'}>Linkedin</h4>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default SideBar;