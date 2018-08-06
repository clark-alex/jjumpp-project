import React from 'react';
import './SideBar.css';

function SideBar(props) {
    console.log(props.state)
    return (
        <div className='SideBar flexColumn'>
                <section className='searchBar flexRow' >
                    <i class="material-icons">search</i>
                    <input placeholder='search' />
                </section>
            <div className='innerBox'>
                <h1>Filter Locations by</h1>
                <section>
                    <h2>Country</h2>
                    <div className='flexRow'>
                        <input name='USA' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.USA ? 'active' : 'disabled'}>United States</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='UK' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.UK ? 'active' : 'disabled'}>United Kingdom</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='Canada' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.Canada ? 'active' : 'disabled'}>Canada</h4>
                    </div>
                </section>
                <section>
                    <h2>Average Rating</h2>
                    <div className='flexRow'>
                        <input name='fiveStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4 className={props.state.fiveStars ? 'active' : 'disabled'}>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                        </h4>
                    </div>
                    <div className='flexRow'>
                        <input name='fourStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4 className={props.state.fourStars ? 'active' : 'disabled'}>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                        </h4>
                    </div>
                    <div className='flexRow'>
                        <input name='threeStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4 className={props.state.threeStars ? 'active' : 'disabled'}>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                        </h4>
                    </div>
                    <div className='flexRow'>
                        <input name='twoStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4 className={props.state.twoStars ? 'active' : 'disabled'}>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                        </h4>
                    </div>
                    <div className='flexRow'>
                        <input name='oneStar' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4 className={props.state.oneStar ? 'active' : 'disabled'}>
                            <i class="material-icons">star</i>
                        </h4>
                    </div>
                </section>
                <section>
                    <h3>Integrated With</h3>
                    <div className='flexRow'>
                        <input name='Facebook' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.Facebook ? 'active' : 'disabled'}>Facebook</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='GoogleAnalytics' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.GoogleAnalytics ? 'active' : 'disabled'}>Google Analytics</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='GoogleMyBusiness' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.GoogleMyBusiness ? 'active' : 'disabled'}>Google My Business</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='InfusionSoft' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.InfusionSoft ? 'active' : 'disabled'}>InfusionSoft</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='Twitter' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.Twitter ? 'active' : 'disabled'}>Twitter</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='YouTube' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.YouTube ? 'active' : 'disabled'}>YouTube</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='LinkedIn' onChange={props.handleInput} type='checkbox' />
                        <h4 className={props.state.LinkedIn ? 'active' : 'disabled'}>Linkedin</h4>
                    </div>
                </section>
                    <button onClick={() => props.filterLocations()} className='secondaryButton'> {props.filterButtonToggle ? 'Cancel' : 'Filter'} </button>
            </div>
        </div>
    );
}
export default SideBar;