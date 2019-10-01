import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form'


class Careers extends Component {

  render() {
    return(
      <div id='careerContainer'>

        <div id='careerTitleContainer'>
          <h2 id='careerTitle'>Join our team!</h2>
        </div>
        <div id='careerSubContainer'>

          <NetlifyForm name="bradfordCareer" method="POST" data-netlify="true" data-netlify-recaptcha="true">
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
                  <div id='careerForm'>
                  <div id='careerFormLeftSide'>
                      <label id="careerName">Name: <input type="text" name="name" required /></label>
                      <label id="careerEmail">Email: <input type="email" name="email" required /></label>
                      <label id="careerPhone">Phone: <input type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required /></label>
                  </div>
                  <div id='careerFormRightSide'>
                    <label id="careerResume">Resume: <input type="file" name="resume" /></label>
                    <label id="careerMessage">Message: <textarea name="message"></textarea></label>
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
