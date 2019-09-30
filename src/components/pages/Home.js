import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JeffsDen from '../../images/jeffsDen.jpg';
import JeffsDen2 from '../../images/IMG_8042.CR2-ed.jpg';
import Kitchen from '../../images/kitchenBackgroundFULL.jpg';
import BathroomTub from '../../images/bathroomTub.jpg';


class Home extends Component {

  render() {
    return(
      <div id='homeMainContainer'>
        <div id='carouselContainer'>
          <div id='carouselSubContainer'>
            <Carousel id='homePhotoContainer' autoPlay interval={4000} showThumbs={false} infiniteLoop>
                <div className='frontPagePhoto1'>
                  <img src={JeffsDen2} className='frontPageImage' alt='Living room with new flooring' />
                </div>
                <div className='frontPagePhoto2'>
                  <img src={Kitchen} className='frontPageImage' alt='Kitchen' />
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
        <div id='bottomBackground'>
          <div id='carouselContainer2'>
            <div id='carouselSubContainer2'>
              <Carousel id='homePhotoContainer2' autoPlay interval={4000} showThumbs={false} infiniteLoop>
                  <div className='frontBottomPagePhoto'>
                    <img src={JeffsDen} className='frontPageImage' alt='Living room with new flooring' />
                    <p className='homeBottomPhotoText'>Den angle 1</p>
                  </div>
                  <div className='frontBottomPagePhoto2'>
                    <img src={JeffsDen2} className='frontPageImage' alt='Living room with new flooring but different angle' />
                    <p className='homeBottomPhotoText'>Den angle 2</p>
                  </div>
                  <div className='frontBottomPagePhoto3'>
                    <img src={BathroomTub} className='frontPageImage' alt='Bathroom' />
                    <p className='homeBottomPhotoText'>Bathroom</p>
                  </div>
              </Carousel>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default Home;
