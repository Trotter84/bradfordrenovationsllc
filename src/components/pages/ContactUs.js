import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form'

import SidePhoto from '../../images/diningRoom.jpg'


class ContactUs extends Component {

  render() {
    return(
      <div id='contactUsContainer'>


        <div id='contactTitleContainer'>
          <h2 id='contactUsTitle'>You want a dream home. We want to help you create it!</h2>
        </div>

        <div id='contactUsSubContainer'>

          <NetlifyForm name="Contact" method="POST" data-netlify="true">
            {({ loading, error, success }) => (
              <div>
                {loading &&
                  <div>Loading...</div>
                }
                {error &&
                  <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                  <div>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                  <div id='contactForm'>
                      <label id="contactName">Name: <input type="text" name="name" /></label>
                      <label id="contactEmail">Email: <input type="email" name="email" /></label>
                      <label id="contactPhone">Phone: <input type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required /></label>
                      <label id="contactMessage">Message: <textarea name="message"></textarea></label>
                      <button type="submit" id="contactSubmit">Send</button>
                  </div>
                }
              </div>
            )}
          </NetlifyForm>


          <div id="contactPhotoContainer">
            <Image id="contactPhoto" src={SidePhoto} />
          </div>

        </div>
      </div>
    )
  }
};

export default ContactUs;
