import React, { Component } from 'react';
import Styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';


const MenuBar = Styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #70c2c4;
  height: 6.00em;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`

const Logo = Styled.h1`
  padding: 0.4em 0 0 0.5em;
  font-size: 2.8em;
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #D1996B;
`

const Nav = Styled.div`

`

const EachNav = Styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  font-size: 1.2em;
  padding: 2em 1em 0 0;
  font-weight: bold;
  height: 5.00em;
  width: 6.250em;
  background-color: #70c2c4;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  :hover {
    color: #D1996B;
  }
`



class TopMenu extends Component {



  render() {
    return (
      <MenuBar>
        <Link to={'/'}>
          <Logo>Bradford Renovations LLC</Logo>
        </Link>
        <Nav>
          <EachNav to={'/about-us'}>About Us</EachNav>
          <EachNav to={'/contact'}>Contact</EachNav>
        </Nav>
      </MenuBar>
    )
  }

}

export default TopMenu;
