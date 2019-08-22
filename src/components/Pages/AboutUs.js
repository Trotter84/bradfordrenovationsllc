import React, { Component } from 'react';

import BackgroundImage from '../BackgroundImage.js';


class AboutUs extends Component {

  render() {
    return(
      <div id='aboutUsContainer'>
        <BackgroundImage />
        <div id='aboutUsSubContainer'>
          <h1>AboutUs</h1>
        </div>
      </div>
    )
  }
};

export default AboutUs;
