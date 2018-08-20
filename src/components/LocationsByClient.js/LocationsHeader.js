import React from 'react';
import './Location.css';

export default function LocationsHeader(props) {
  return (
    <div className="headerContainer">
      <header>
        <h1>LOCATIONS</h1>
        <section className="flexRow headerButton">
          <i className="material-icons"> view_column</i>
          <button type="button" className="primaryButton" onClick={() => props.handleToggle('addLocation')}>
            + ADD LOCATION
          </button>
        </section>
      </header>

      <section className="searchSubMenu flexRow">
        <button type="button" onClick={() => props.handleToggle('filterMenuToggle')}>
          <i className="material-icons">search</i>
        </button>
        <button type="button" onClick={() => props.handleToggle('filterMenuToggle')}>
          <i className="material-icons">filter_list</i>
        </button>
      </section>
      <section className="locationSortBar flexRow ">
        <div className="locationSort flexRow " style={{ width: '26%' }}>
          <h2>Location</h2>
          <button type="button" onClick={() => props.sortByLocationName('name')} className="sortArrows flexColumn">
            <i className="material-icons">arrow_drop_up</i>
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>

        <div className="locationSort flexRow" style={{ width: '26%', justifyContent: 'flex-start' }}>
          <h2>Last Managed</h2>
          <button type="button" onClick={() => props.sortByLocationName('last_managed')} className="flexColumn">
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>

        <div className="locationSort flexRow" style={{ width: '15%', justifyContent: 'flex-start' }}>
          <h2>Users</h2>
        </div>

        <div className="locationSort flexRow notificationsDisplay">
          <h2>Notifications</h2>
          <button
            type="button"
            onClick={() => props.sortByLocationName('notifications')}
            className="sortArrows flexColumn"
          >
            <i className="material-icons">arrow_drop_up</i>
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>
      </section>
    </div>
  );
}
