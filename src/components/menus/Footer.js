import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';


const Title = Styled.h2`
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

class Footer extends Component {

  render() {
    return(
      <div id='footerContainer'>
        <Link to={`/`}>
          <Title id='footerTitle'>Bradford Renovations LLC</Title>
        </Link>
        <NavLink>
          <Nav to={'/careers'} className='footerText'>Careers</Nav>
          <Nav to={'/contact-us'} className='footerText'>Contact Us</Nav>
          <Nav to={'/about-us'} className='footerText'>About Us</Nav>
          <Nav exact to={'/'} className='footerText'>Home</Nav>
        </NavLink>
      </div>
    )
  }
};

export default Footer;
