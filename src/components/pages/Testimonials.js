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
                  <p id='quoteText'>{testimonial.quote1}</p>
                  <p id='quoteText'>{testimonial.quote2}</p>
                  <p id='quoteText'>{testimonial.quote3}</p>
                  <p id='quoteText'>{testimonial.quote4}</p>
                  <p id='quoteText'>{testimonial.quote5}</p>
                  <p id='quoteText'>{testimonial.quote6}</p>
                  <p id='quoteText'>{testimonial.quote7}</p>
                  <p id='quoteText'>{testimonial.quote8}</p>
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
