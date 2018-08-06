import React from 'react';
import './Location.css';
import { connect } from 'react-redux';
import { getUser, sortLocations} from '../../ducks/reducer';


export default function LocationsHeader(props) {
    return (
        <div className='headerContainer'>
            <header>
                <h1>LOCATIONS</h1>
                <section className='flexRow headerButton'>
                    <i class="material-icons"> view_column</i>
                    <button className='primaryButton' onClick={() => props.handleToggle('addLocation')}>+ ADD LOCATION</button>
                </section>
            </header>

            <section onClick={()=>props.handleToggle('filterMenuToggle')} className='searchSubMenu flexRow'>
                <i class="material-icons">search</i>
                <i class="material-icons">filter_list</i>
            </section>

            <section className='locationSortBar flexRow '>
                <div className='locationSort flexRow locationDisplay'>
                    <h2>Location</h2>
                    <div onClick={()=>props.sortByLocationName('name')}className='sortArrows flexColumn'>
                        <i class="material-icons">arrow_drop_up</i>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                </div>

                <div className='locationSort flexRow lastManagedDisplay' >
                    <h2>Last Managed</h2>
                    <div onClick={()=>props.sortByLocationName('last_managed')} className='flexColumn'>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                </div>

                <div className='locationSort flexRow userDisplay ' style={{marginRight:'70px'}}>
                    <h2>Users</h2>
                </div>

                <div className='locationSort flexRow notificationsDisplay'style={{    position: 'relative', left: '-40px'}}>
                    <h2>Notifications</h2>
                    <div onClick={()=>props.sortByLocationName('notifications')} className='sortArrows flexColumn'>
                        <i class="material-icons">arrow_drop_up</i>
                        <i class="material-icons">arrow_drop_down</i>
                    </div>
                </div>

                <div className='managePlaceholder'></div>

            </section>
        </div>
    );
}
