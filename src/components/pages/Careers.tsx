import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form';
import Styled from 'styled-components';

const Input = Styled.input`
  appearance: none;
  border: none;
  border-bottom: 1px solid #344F6B;
  margin-bottom: 1px;
  display: block;
  margin-top: 8px;
  :focus {
    border-bottom: 2px solid #344F6B;
    margin-bottom: 0px;
    outline: none;
  }
`

class Careers extends Component {

  render() {
    return(
      <div id='careerContainer'>

        <div id='careerTitleContainer'>
          <h2 id='careerTitle'>Join our team!</h2>
        </div>
        <div id='careerSubContainer'>

          <NetlifyForm id='careersForm' name="Career" method="POST" data-netlify="true">
            {({ loading, error, success }) => (
              <div id='careersFieldContainer'>
                {loading &&
                  <div id='careersFieldLoading'>Loading <Icon loading name='spinner' /></div>
                }
                {error &&
                  <div id='careersFieldError'>Your information was not sent. Please try again later.</div>
                }
                {success &&
                  <div id='careersFieldSuccess'>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                  <div id='careerForm'>
                  <div id='careerFormLeftSide'>
                      <label id="careerNameContainer">Name: <Input id="careerName" type="text" name="name" required /></label>
                      <label id="careerEmailContainer">Email: <Input id="careerEmail" type="email" name="email" required /></label>
                      <label id="careerPhoneContainer">Phone: <Input id="careerPhone" type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required /></label>
                  </div>
                  <div id='careerFormRightSide'>
                    <label id="careerResumeContainer">Resume: <input id="careerResume" type="file" name="resume" /></label>
                    <label id="careerMessageContainer">Message: <Input as="textarea" id="careerMessage" name="message" /></label>
                    <button type="submit" id="careerSubmit">Send</button>
                  </div>

                  </div>
                }
              </div>
            )}
          </NetlifyForm>
        </div>
      </div>
    )
  }
};

export default Careers;
