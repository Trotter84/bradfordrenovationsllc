import React, { Component, CSSProperties } from 'react';
import { Image } from 'semantic-ui-react';
import MainPhoto from '../images/kitchen-background.jpg'

const styles = {
  page:{
    height: '100%',
    position: 'relative',
  } as CSSProperties,

  image:{
    position: 'absolute',
  } as CSSProperties,
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
