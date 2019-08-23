import React, { Component } from 'react';

import BackgroundImage from '../BackgroundImage.js';


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>
        <div id='contactUsSubContainer'>
          <form name="contact" action="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
};

export default ContactUs;
