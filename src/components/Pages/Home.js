import React, { Component } from 'react';

const styles = {

  firstBlock:{
    backgroundColor: '#70c2c4',
    position: 'relative',
    height: '500px',
    width: '100%',
    zIndex: '2',
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
