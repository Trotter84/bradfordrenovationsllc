import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';



class TopMenu extends Component {

  render() {
    return(
      <div id='menuContainer'>
        <Link to={`/`}>
          <h1>Bradford Renovations LLC</h1>
        </Link>
        <NavLink>
          <Link exact to={'/'}>HOME</Link>
          <Link to={'/about-us'}>ABOUT US</Link>
          <Link to={'/contact-us'}>CONTACT US</Link>
        </NavLink>
      </div>
    )
  }
};

export default TopMenu;
