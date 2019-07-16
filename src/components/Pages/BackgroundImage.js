import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import MainPhoto from '../../images/bigstock-Beautiful-Custom-Kitchen-Desig-115242206.jpg'

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
