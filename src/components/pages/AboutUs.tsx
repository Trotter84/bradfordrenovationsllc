import React, { Component } from 'react';

import FacePhoto from '../../images/drewAboutPage.jpg';

class AboutUs extends Component {

  render() {
    return(
      <>
        <div id='aboutUsPhotoContainer'>
          <img src={FacePhoto} id='aboutUsPhoto' alt='Andrew Bradford, with truck and trailer' />
        </div>
        <div id='aboutUsContainer'>

          <div id='aboutUsWhiteContainer'>
            <p id='aboutUsText'>
              Drew Bradford has always cared about getting the details right, and he brings that passion to Bradford Renovations. And say goodbye to multiple contractors. Bradford Renovations will take your project from start to finish, whether you want a kitchen or bath makeover, bedroom restoration, or to transform your whole house into your dream home.<br /><br />Personal, professional and real, from first call to finished job and clean up. That’s what you can expect from us. That’s our guarantee.
            </p>
          </div>
        </div>
      </>
    )
  }
};

export default AboutUs;
