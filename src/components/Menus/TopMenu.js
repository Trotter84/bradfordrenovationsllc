import React, { Component } from 'react';
import Styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';


const MenuBar = Styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #70c2c4;
  height: 80px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`

const Nav = Styled.div`

`

const EachNav = Styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  font-size: 1.2em;
  padding: 1.6em 0 1.4em 0;
  font-weight: bold;
  height: 80px;
  width: 100px;
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
          <h1>Bradford Renovations LLC</h1>
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
