import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';


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
`

class TopMenu extends Component {

  render() {
    return(
      <div id='menuContainer'>
        <Link to={`/`}>
          <Title id='topMenuTitle'>Bradford Renovations LLC</Title>
        </Link>
        <NavLink>
          <Nav to={'/contact-us'} className='topMenuText'>Contact Us</Nav>
          <Nav to={'/about-us'} className='topMenuText'>About Us</Nav>
          <Nav exact to={'/'} className='topMenuText'>Home</Nav>
        </NavLink>
      </div>
    )
  }
};

export default TopMenu;
