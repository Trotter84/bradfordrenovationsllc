import React, { Component } from 'react';

import BackgroundImage from '../BackgroundImage.js';


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>
        <BackgroundImage />
        <div id='contactUsSubContainer'>
          <h1>Contact Us</h1>
        </div>
      </div>
    )
  }
};

export default ContactUs;
