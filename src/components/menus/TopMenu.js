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

const Nav = Styled(Link)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: black;
  }
  &.active {
    color: black;
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
        <NavLink id='topMenuTextContainer'>
          <Nav to={'/contact-us'} className='topMenuText'>Contact Us</Nav>
          <Nav to={'/about'} className='topMenuText'>About</Nav>
          <Nav exact to={'/'} className='topMenuText'>Home</Nav>
        </NavLink>
      </div>
    )
  }
};

export default TopMenu;
