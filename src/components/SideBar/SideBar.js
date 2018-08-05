import React  from 'react';
import './SideBar.css';

function  SideBar(props) {
        return (
            <div className='SideBar'>
                <section>
                    <i class="material-icons">search</i>
                    <input placeholder='search' />
                </section>
                <h1>Filter Locations by</h1>
                <section>
                    <h2>Country</h2>
                    <div className='flexRow'>
                        <input name='USA' onChange={props.handleInput} type='checkbox' />
                        <h4>United States</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='UK' onChange={props.handleInput} type='checkbox' />
                        <h4>United Kingdom</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='Canada' onChange={props.handleInput} type='checkbox' />
                        <h4>Canada</h4>
                    </div>
                </section>
                <section>
                    <h2>Average Rating</h2>
                    <div className='flexRow'>
                        <input name='fiveStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4>fiveStars</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='fourStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4>fourStars</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='threeStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4>threeStars</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='twoStars' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4>twoStars</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='oneStar' onChange={props.handleRatingsInput} type='checkbox' />
                        <h4>oneStar</h4>
                    </div>
                </section>
                <section>
                    <h3>Integrated With</h3>
                    <div className='flexRow'>
                        <input name='Facebook' onChange={props.handleInput} type='checkbox' />
                        <h4>Facebook</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='GoogleAnalytics' onChange={props.handleInput} type='checkbox' />
                        <h4>Google Analytics</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='GoogleMyBusiness' onChange={props.handleInput} type='checkbox' />
                        <h4>Google My Business</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='InfusionSoft' onChange={props.handleInput} type='checkbox' />
                        <h4>InfusionSoft</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='Twitter' onChange={props.handleInput} type='checkbox' />
                        <h4>Twitter</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='YouTube' onChange={props.handleInput} type='checkbox' />
                        <h4>YouTube</h4>
                    </div>
                    <div className='flexRow'>
                        <input name='Linkedin' onChange={props.handleInput} type='checkbox' />
                        <h4>Linkedin</h4>
                    </div>
                    <button onClick={()=>props.filterLocations()} className = 'secondaryButton'> {props.filterButtonToggle? 'Cancel':'Filter'} </button>
                </section>
            </div>
        );
}

export default SideBar;