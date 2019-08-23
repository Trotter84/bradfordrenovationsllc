import React, { Component } from 'react';

import BackgroundImage from '../BackgroundImage.js';


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>
        <div id='contactUsSubContainer'>
          <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
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
