import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='navWrapper'>
            <ul className='navMenu'>
                <img className='logo' src='https://jjumpp.com/wp-content/uploads/2018/01/footer-logo.png' />
                <li>Locations</li>
                <li>Users</li>
                <li>Billing</li>
            </ul>
            <section className='navMenu'>
                <h3>Hello, {`${props.first_name} ${props.last_name}`}</h3>
                <i class="material-icons">arrow_drop_down</i>
            </section>
        </div>
    );
}
export default NavBar;