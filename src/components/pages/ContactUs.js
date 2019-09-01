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

        <div id='contactUsTitle'>
          <h2>We&apos;d love to talk to you about how we can help you make your house into your dream home!</h2>
        </div>

        <div id='contactUsSubContainer'>

          <div>
            <form id='contactForm' name="bradfordContact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
                <label id="contactName">Your Name: <input type="text" name="name" /></label>
                <label id="contactEmail">Your Email: <input type="email" name="email" /></label>
                <label id="contactMessage">Message: <textarea name="message"></textarea></label>
                <button type="submit" id="contactSubmit">Send</button>
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
