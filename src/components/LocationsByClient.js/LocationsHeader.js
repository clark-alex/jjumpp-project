import React from 'react';
import './Location.css'
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer'


export default function LocationsHeader(props){
        return (
            <div>
                <header>
                    <h1>LOCATIONS</h1>
                    <section className='flexRow'>
                        <i class="material-icons"> view_column</i>
                        <button className='primaryButton'>+ ADD LOCATION</button>
                    </section>
                </header>

                <section className='searchSubMenu flexRow'>
                    <i class="material-icons">search</i>
                    <i class="material-icons">filter_list</i>
                </section>

                <section className='locationSortBar flexRow'>
                    <div className='locationSort flexRow'>
                        <h2>Location</h2>
                        <div className='sortArrows flexColumn'>
                            <i class="material-icons">arrow_drop_up</i>
                            <i class="material-icons">arrow_drop_down</i>
                        </div>
                    </div>
                    <div className='locationSort flexRow'>
                        <h2>Last Managed</h2>
                        <div className='flexColumn'>
                            <i class="material-icons">arrow_drop_down</i>
                        </div>
                    </div>
                    <div className='locationSort flexRow'>
                        <h2>Users</h2>
                    </div>
                    <div className='locationSort flexRow'>
                        <h2>Notifications</h2>
                        <div className='sortArrows flexColumn'>
                            <i class="material-icons">arrow_drop_up</i>
                            <i class="material-icons">arrow_drop_down</i>
                        </div>
                    </div>
                </section>
                <div className='underline'><div></div></div>
            </div>
        );
}