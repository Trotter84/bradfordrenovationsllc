import React, { Component } from 'react';

import testimonialInfo from '../data/testimonalInfo';


class Testimonials extends Component {

  render() {
    return (
      <>
        <div id='testimonialContainer'>
          <div id='testimonialWhiteContainer'>
            {testimonialInfo.map(testimonial => {
              return(
                <div id='quoteContainer'>
                  <p id='quoteText'>{testimonial.quote}</p>
                  <h4 id='quoteName'>-{testimonial.name}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}


export default Testimonials;
