import React, { Component } from 'react';
import Styled from 'styled-components';
import '../../App.css';

const Btn = Styled.a`
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

const styles = {
  bar:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#70c2c4',
    height: '80px',
    overflow: 'hidden',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1',
  },

  menuButtons:{

  },

}


class TopMenu extends Component {



  render() {
    return (
      <div class="navbar" style={styles.bar}>
        <h1>Bradford Renovations LLC</h1>
        <div style={styles.menuButtons}>
          <Btn>About Us</Btn>
          <Btn>Contact</Btn>
        </div>
      </div>
    )
  }

}

export default TopMenu;
