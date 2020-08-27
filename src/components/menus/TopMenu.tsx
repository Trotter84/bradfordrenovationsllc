import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';

import WhiteLogo from '../../images/BradfordReno-logo-white.png';


const Title = Styled.h1`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: black;
  }
`

const Nav = Styled(NavLink)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #6385A8;
  }
  &.active {
    color: #6385A8;
    text-decoration: underline;
  }
`

class TopMenu extends Component {

  render() {
    return(
      <div id='menuContainer'>
        <Link to={`/`} id='topMenuLogoContainer'>
          <img src={WhiteLogo} alt="Bradford Renovations Logo" id='topMenuLogo'></img>
          <Title id='topMenuTitle'>Bradford Renovations LLC</Title>
        </Link>
        <div id='topMenuTextContainer'>
          <Nav to={'/contact-us'} className='topMenuText'>Contact Us</Nav>
          <Nav to={'/testimonials'} className='topMenuText'>Testimonials</Nav>
          <Nav to={'/about'} className='topMenuText'>About</Nav>
          <Nav exact to={'/'} className='topMenuText'>Home</Nav>
        </div>
      </div>
    )
  }
};

export default TopMenu;
