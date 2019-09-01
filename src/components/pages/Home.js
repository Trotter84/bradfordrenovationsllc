import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JeffsDen from '../../images/jeffsDen.jpg'
import JeffsDen2 from '../../images/jeffsDen2.jpg'
import BathroomTub from '../../images/bathroomTub.jpg'


class Home extends Component {

  render() {
    return(
      <div>
        <div id='carouselContainer'>
          <div id='carouselSubContainer'>
            <Carousel autoPlay interval={4000} showThumbs={false} infiniteLoop>
                <div className='frontPagePhoto1'>
                  <img src={JeffsDen} className='frontPageImage' alt='Living room with new flooring' />
                </div>
                <div className='frontPagePhoto2'>
                  <img src={JeffsDen2} className='frontPageImage' alt='Living room with new flooring but different angle' />
                </div>
                <div className='frontPagePhoto3'>
                  <img src={BathroomTub} className='frontPageImage' alt='Bathroom' />
                </div>
            </Carousel>
          </div>
        </div>
        <div id='whiteTextArea'>
          <h4>Text here</h4>
        </div>
      </div>
    )
  }
};

export default Home;
