import React from 'react';
import './NavBar.css';

function NavBar(props) {
  const { first_name, last_name } = props;
  return (
    <div className="navWrapper">
      <ul className="navMenu">
        <img className="logo" src="https://jjumpp.com/wp-content/uploads/2018/01/footer-logo.png" alt="Jjumpp logo" />
        <li>Locations</li>
        <li>Users</li>
        <li>Billing</li>
      </ul>
      <section className="navMenu">
        <h3>Hello, {`${first_name} ${last_name}`}</h3>
        <i className="material-icons">arrow_drop_down</i>
      </section>
    </div>
  );
}
export default NavBar;
