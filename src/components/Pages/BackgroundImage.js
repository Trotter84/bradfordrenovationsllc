import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import MainPhoto from '../../images/These-mortgages-pay-for-home-renovations.jpg';

const styles = {
  page:{
    height: '2000px',
    marginTop: '80px',
    position: 'relative',
  },

  image:{
    width: '100%',
    position: 'absolute',
  },
}


class BackgroundImage extends Component {

  render() {
    return (
      <div style={styles.page}>
        <Image style={styles.image} src={MainPhoto} />
      </div>
    )
  }
}

export default BackgroundImage;
