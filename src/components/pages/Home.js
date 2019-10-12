import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JeffsDen from '../../images/jeffsDen.jpg';
import JeffsDen2 from '../../images/IMG_8042.CR2-ed.jpg';
import Kitchen from '../../images/kitchenBackgroundFULL.jpg';
import BathroomTub from '../../images/bathroomTub.jpg';
import BathroomFromDoor from '../../images/IMG_8319.jpg';
import BathroomMirror from '../../images/IMG_8307.jpg';
import BathroomShower from '../../images/IMG_8311.jpg';
import LaundryRoom from '../../images/IMG_8322.jpg';

import Footer from '../menus/Footer';


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
        <div id='blackDividerArea'></div>
        <div id='bottomBackground'>
          <div id='blackLayerBottom'>
            <div id='carouselContainer2'>
              <div id='carouselSubContainer2'>
                <Carousel id='homePhotoContainer2' autoPlay interval={4000} showThumbs={false} infiniteLoop>
                    <div className='frontBottomPagePhoto'>
                      <img src={BathroomMirror} className='frontPageImage' alt='Bathroom facing mirror' />
                      <p className='homeBottomPhotoText'>Bathroom</p>
                    </div>
                    <div className='frontBottomPagePhoto'>
                      <img src={BathroomFromDoor} className='frontPageImage' alt='Bathroom from door angle' />
                      <p className='homeBottomPhotoText'>Bathroom</p>
                    </div>
                    <div className='frontBottomPagePhoto'>
                      <img src={BathroomShower} className='frontPageImage' alt='Bathroom shower' />
                      <p className='homeBottomPhotoText'>Bathroom</p>
                    </div>
                    <div className='frontBottomPagePhoto'>
                      <img src={LaundryRoom} className='frontPageImage' alt='Laundry room' />
                      <p className='homeBottomPhotoText'>Laundry Room</p>
                    </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default Home;
