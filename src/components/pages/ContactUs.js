import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import SidePhoto from '../../images/diningRoom.jpg'


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
          <div id='contactForm'>
            <form name="bradfordContact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
              <p>
                <label id="contactName">Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label id="contactEmail">Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label id="contactMessage">Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit" id="contactSubmit">Send</button>
              </p>
            </form>
          </div>
          <div id="contactPhotoContainer">
            <Image id="contactPhoto" src={SidePhoto} />
          </div>
        </div>
      </div>
    )
  }
};

export default ContactUs;
