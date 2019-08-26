import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import BackgroundImage from '../BackgroundImage.js';


class Home extends Component {

  render() {
    return(
      <div>
        <div id='carouselContainer'>
            <Carousel autoPlay interval={4000} showThumbs={false} infiniteLoop>
                <Photo className='frontPagePhoto1'>
                  <img  />
                </Photo>
                <Photo className='frontPagePhoto2'>
                  <img  />
                </Photo>
                <Photo className='frontPagePhoto3'>
                  <img  />
                </Photo>
            </Carousel>
        </div>
      </div>
    )
  }
};

export default Home;
