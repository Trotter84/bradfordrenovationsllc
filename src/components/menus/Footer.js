import React, { Component } from 'react';

import { NavLink, Link } from 'react-router-dom';



class Footer extends Component {

  render() {
    return(
      <div id='footerContainer'>
        <Link to={`/`}>
          <h1>Bradford Renovations LLC</h1>
        </Link>
        <NavLink>
          <Link exact to={'/'}>Home</Link>
          <Link to={'/about-us'}>About Us</Link>
          <Link to={'/contact-us'}>Contact Us</Link>
          <Link to={'/careers'}>Careers</Link>
        </NavLink>
      </div>
    )
  }
};

export default Footer;
