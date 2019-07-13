import React, { Component } from 'react';

const styles = {

  firstBlock:{
    backgroundColor: '#70c2c4',
    position: 'absolute',
    height: '500px',
    width: '1250px',
    zIndex: '2',
    top: '850px',
    opacity: '0.8',
  },
}


class Home extends Component {

  render() {
    return (
      <div style={styles.page}>
        <div style={styles.firstBlock}>
        </div>
      </div>
    )
  }
}

export default Home;
