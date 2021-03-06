import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function Navbar (props) {
    console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000)

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to={'/home'} className="brand-logo">Poke'Times</Link>
                <ul className="right">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);