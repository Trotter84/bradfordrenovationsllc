import React, { Component } from 'react';


class Careers extends Component {

  render() {
    return(
      <div id='careerContainer'>

        <div id='careerTitle'>
          <h2>Join our team!</h2>
        </div>

        <div id='careerSubContainer'>
          <form id='careerForm' name="bradfordContact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
            <div id='careerFormLeftSide'>
                <label id="careerName">Name: <input type="text" name="name" required /></label>
                <label id="careerEmail">Email: <input type="email" name="email" required /></label>
                <label id="careerPhone">Phone: <input type="tel" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /></label>
            </div>
            <div id='careerFormRightSide'>
                <label id="careerResume">Resume: <input type="file" name="resume" /></label>
                <label id="careerMessage">Message: <textarea name="message"></textarea></label>
            </div>
              <button type="submit" id="careerSubmit">Send</button>
          </form>
        </div>
      </div>
    )
  }
};

export default Careers;
