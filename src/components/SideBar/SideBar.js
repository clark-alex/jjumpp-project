import React from 'react';
import './SideBar.css';

function SideBar(props) {
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
                    <input name='USA' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>United States</h4>
                </div>
                <div className='flexRow'>
                    <input name='UK' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>United Kingdom</h4>
                </div>
                <div className='flexRow'>
                    <input name='Canada' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Canada</h4>
                </div>
            </section>
            <section>
                <h2>Average Rating</h2>
                <div className='flexRow'>
                    <input name='fiveStars' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>fiveStars</h4>
                </div>
                <div className='flexRow'>
                    <input name='fourStars' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>fourStars</h4>
                </div>
                <div className='flexRow'>
                    <input name='threeStars' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>threeStars</h4>
                </div>
                <div className='flexRow'>
                    <input name='twoStars' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>twoStars</h4>
                </div>
                <div className='flexRow'>
                    <input name='oneStar' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>oneStar</h4>
                </div>
            </section>
            <section>
                <h3>Integrated With</h3>
                <div className='flexRow'>
                    <input name='facebook' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Facebook</h4>
                </div>
                <div className='flexRow'>
                    <input name='googleAnalytics' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Google Analytics</h4>
                </div>
                <div className='flexRow'>
                    <input name='googleMyBusiness' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Google My Business</h4>
                </div>
                <div className='flexRow'>
                    <input name='infusionSoft' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>InfusionSoft</h4>
                </div>
                <div className='flexRow'>
                    <input name='twitter' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Twitter</h4>
                </div>
                <div className='flexRow'>
                    <input name='youTube' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>YouTube</h4>
                </div>
                <div className='flexRow'>
                    <input name='linkedin' onMouseUp={props.filterLocations} onChange={props.handleInput} type='checkbox' />
                    <h4>Linkedin</h4>
                </div>
            </section>
        </div>
    );

}

export default SideBar;