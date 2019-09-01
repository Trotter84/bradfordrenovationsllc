import React, { Component } from 'react';

import FacePhoto from '../../images/facePicture.jpg';

class AboutUs extends Component {

  render() {
    return(
      <>
        <div id='aboutUsPhotoContainer'>
          <img src={FacePhoto} id='aboutUsPhoto' alt='Andrew Bradford, with truck and trailer' />
        </div>
        <div id='aboutUsContainer'>

          <div id='aboutUsWhiteContainer'>
          </div>
        </div>
      </>
    )
  }
};

export default AboutUs;
