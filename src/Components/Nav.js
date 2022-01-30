import netflixlogo from './../img/netflix.png'
import React from 'react';

class Nav extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navigation">
            <article className="logo-wrapper">
            <img src={netflixlogo} alt="Netflix" />
            </article>
            <button className="sign-in-btn">
            Sign In
            </button>
            </nav>
        );
    }
}
 
export default Nav;