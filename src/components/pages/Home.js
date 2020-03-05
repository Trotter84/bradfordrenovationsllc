import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JeffsDen2 from '../../images/IMG_8042.CR2-ed.jpg';
import Kitchen from '../../images/kitchenBackgroundFULL.jpg';
import BathroomTub from '../../images/bathroomTub.jpg';
import BathroomFromDoor from '../../images/IMG_8319.jpg';
import BathroomMirror from '../../images/IMG_8307.jpg';
import BathroomShower from '../../images/IMG_8311.jpg';
import LaundryRoom from '../../images/IMG_8322.jpg';


class Home extends Component {

  render() {
    return(
      <div id='homeMainContainer'>
        <div id='carouselContainer'>
          <div id='carouselSubContainer'>
            <Carousel id='homePhotoContainer' autoPlay interval={4000} showThumbs={false} infiniteLoop>

                <div className='frontPagePhoto1'>
                  <img src={JeffsDen2} className='frontPageImage' alt='Living room with new flooring' />
                  <p className='homeBottomPhotoText'>Welcoming Living Rooms</p>
                </div>

                <div className='frontPagePhoto2'>
                  <img src={BathroomTub} className='frontPageImage' alt='Bathroom showing bath tub' />
                  <p className='homeBottomPhotoText'>Spectacular Bathrooms</p>
                </div>

                <div className='frontPagePhoto3'>
                  <img src={Kitchen} className='frontPageImage' alt='Kitchen' />
                  <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
                </div>

                <div className='frontPagePhoto4'>
                  <img src={BathroomMirror} className='frontPageImage' alt='Bathroom facing mirror' />
                  <p className='homeBottomPhotoText'>Spectacular Bathrooms</p>
                </div>

                <div className='frontPagePhoto5'>
                  <img src={LaundryRoom} className='frontPageImage' alt='Laundry room' />
                  <p className='homeBottomPhotoText'>Efficient Laundry Rooms</p>
                </div>

                <div className='frontPagePhoto6'>
                  <img src={BathroomFromDoor} className='frontPageImage' alt='Bathroom facing window' />
                  <p className='homeBottomPhotoText'>Spectacular Bathrooms</p>
                </div>

            </Carousel>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
