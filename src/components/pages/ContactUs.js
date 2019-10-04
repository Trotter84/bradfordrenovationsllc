import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';
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

          <NetlifyForm id='contactForm' name="Contact" method="POST" data-netlify="true">
            {({ loading, error, success }) => (
              <div id='contactFieldContainer'>
                {loading &&
                  <div id='contactFieldLoading'>Loading <Icon loading name='spinner' /></div>
                }
                {error &&
                  <div id='contactFieldError'>Your information was not sent. Please try again later.</div>
                }
                {success &&
                  <div id='contactFieldSuccess'>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                  <div id='contactFormContainer'>
                      <label id="contactNameContainer">Name: <input id="contactName" type="text" name="name" /></label>
                      <label id="contactEmailContainer">Email: <input id="contactEmail" type="email" name="email" /></label>
                      <label id="contactPhoneContainer">Phone: <input id="contactPhone" type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required /></label>
                      <label id="contactMessageContainer">Message: <textarea id="contactMessage" name="message"></textarea></label>
                      <button type="submit" id="contactSubmit">Send</button>
                  </div>
                }
              </div>
            )}
          </NetlifyForm>

          <div id="contactUsPhotoContainer">
            <Image id="contactUsPhoto" src={SidePhoto} />
            <div id='contactUsBasicInfoContainer'>
              <p id='contactUsPhoneContainer'>Phone: &nbsp;
                <a id='contactUsPhone' href="tel:7247120565">(724) 712-0565</a>
              </p>
              <p  id='contactUsEmailContainer'>Email: &nbsp;
                <a id='contactUsEmail' href="mailto:bradforddrew55@gmail.com" target='_blank' rel="noopener noreferrer">bradforddrew55@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default ContactUs;
