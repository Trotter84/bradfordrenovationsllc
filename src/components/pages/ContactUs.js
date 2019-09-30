import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form'

import SidePhoto from '../../images/diningRoom.jpg'


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>

        <form name="bradfordContact" data-netlify >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
          <button type="submit">submit</button>
        </form>

        <div id='contactTitleContainer'>
          <h2 id='contactUsTitle'>You want a dream home. We want to help you create it!</h2>
        </div>

        <div id='contactUsSubContainer'>




          <div id="contactPhotoContainer">
            <Image id="contactPhoto" src={SidePhoto} />
          </div>

        </div>
      </div>
    )
  }
};

export default ContactUs;
