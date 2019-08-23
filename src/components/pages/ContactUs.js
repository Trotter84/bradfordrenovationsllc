import React, { Component } from 'react';

import BackgroundImage from '../BackgroundImage.js';


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>

        <form name="bradfordContact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        <div id='contactUsSubContainer'>
          <form name="bradfordContact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
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
