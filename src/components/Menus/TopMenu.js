import React, { Component } from 'react';
import Styled from 'styled-components';
import '../../App.css';


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

  rightButtons:{
    float: 'left',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    height: '80px',
    width: '80px',
    backgroundColor: '#70c2c4',
    cursor: 'pointer',

  },
}


class TopMenu extends Component {



  render() {
    return (
      <div class="navbar" style={styles.bar}>
        <h1>Bradford Renovations LLC</h1>
        <div style={styles.menuButtons}>
          <a style={styles.rightButtons}>About Us</a>
          <a style={styles.rightButtons}>Contact</a>
        </div>
      </div>
    )
  }

}

export default TopMenu;
