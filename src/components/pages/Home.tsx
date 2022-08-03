import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import JeffsDen2 from '../../images/IMG_8042.CR2-ed.jpg';
import Kitchen from '../../images/kitchenBackgroundFULL.jpg';
import KitchenWide from '../../images/kitchen_wide.jpg';
import KitchenWideFireplace from '../../images/kitchen_wide_fireplace.jpg';
import KitchenWideFridge from '../../images/kitchen_wide_fride.jpg';
import KitchenWindow from '../../images/kitchenSinkWindow.jpg';
import BathroomTub from '../../images/bathroomTub.jpg';
import HexBathroom from '../../images/hex_bathroom_double.jpg';
import BlueBathroom from '../../images/blue_bathroom.jpg';
import Bedroom1 from '../../images/bedroom_suite_photo_2.jpg';
import Bedroom2 from '../../images/bedroom_suite_photo_1.jpg';
import Bedroom3 from '../../images/bedroom_suite_photo_3.jpg';
import FrontHouse from '../../images/frontHouse.jpg';

import FlowerGarden from '../../images/flowerGarden.jpg';
import LaundryRoom from '../../images/IMG_8322.jpg';


const QuoteButton = Styled.button`
  font-family: 'Roboto Slab', serif;
  width: 170px;
  height: 50px;
  font-size: 24px;
  appearance: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: inset 4px 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
  }
`


class Home extends Component {

  render() {
    return(
      <div id='homeMainContainer'>

        <div id='quoteContainer'>
          <Link to={'/contact-us'}>
            <QuoteButton>Get a Quote</QuoteButton>
          </Link>
        </div>


        <div id='carouselContainer'>
          <div id='carouselSubContainer'>
            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} showIndicators={false}>

              <div className='frontPagePhoto1'>
                <img src={KitchenWide} className='frontPageImage' alt='Kitchen wide shot' />
                <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
              </div>

              <div className='frontPagePhoto2'>
                <img src={KitchenWideFireplace} className='frontPageImage' alt='Kitchen wide shot including fireplace' />
                <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
              </div>

              <div className='frontPagePhoto3'>
                <img src={KitchenWideFridge} className='frontPageImage' alt='Kitchen wide shot' />
                <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
              </div>

              <div className='frontPagePhoto4'>
                <img src={Bedroom1} className='frontPageImage' alt='Bathroom showing stairs on left, sinks in the middle, and toilet in small room on the right' />
                <p className='homeBottomPhotoText'>Spectacular Bedroom Suites</p>
              </div>

              <div className='frontPagePhoto5'>
                <img src={FrontHouse} className='frontPageImage' alt='Front side of a house and garden' />
                <p className='homeBottomPhotoText'></p>
              </div>

              <div className='frontPagePhoto6'>
                <img src={JeffsDen2} className='frontPageImage' alt='Living room with new flooring' />
                <p className='homeBottomPhotoText'>Welcoming Living Rooms</p>
              </div>

              <div className='frontPagePhoto7'>
                <img src={HexBathroom} className='frontPageImage' alt='Bathroom with hex design. One of sink and mirror, and second photo of the shower' />
                <p className='homeBottomPhotoText'></p>
              </div>

              <div className='frontPagePhoto8'>
                <img src={Kitchen} className='frontPageImage' alt='Kitchen' />
                <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
              </div>

              <div className='frontPagePhoto9'>
                <img src={Bedroom2} className='frontPageImage' alt='Bathroom showing stairs on left, sinks in the middle, and toilet in small room on the right' />
                <p className='homeBottomPhotoText'>Inviting Bedrooms</p>
              </div>

              <div className='frontPagePhoto10'>
                <img src={BlueBathroom} className='frontPageImage' alt='Bathroom at two different angles' />
                <p className='homeBottomPhotoText'></p>
              </div>

              <div className='frontPagePhoto11'>
                <img src={FlowerGarden} className='frontPageImage' alt='Garden on a wall with steps leading up' />
                <p className='homeBottomPhotoText'>Beautiful Gardens</p>
              </div>

                <div className='frontPagePhoto12'>
                  <img src={BathroomTub} className='frontPageImage' alt='Bathroom showing bath tub' />
                  <p className='homeBottomPhotoText'>Spectacular Bathrooms</p>
                </div>

              <div className='frontPagePhoto13'>
                <img src={KitchenWindow} className='frontPageImage' alt='Kitchen window' />
                <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
              </div>
                
                <div className='frontPagePhoto14'>
                  <img src={Bedroom3} className='frontPageImage' alt='Bathroom showing stairs on left, sinks in the middle, and toilet in small room on the right' />
                  <p className='homeBottomPhotoText'>Inviting Bedrooms</p>
                </div>

              <div className='frontPagePhoto15'>
                <img src={LaundryRoom} className='frontPageImage' alt='Laundry room' />
                <p className='homeBottomPhotoText'>Efficient Laundry Rooms</p>
              </div>

            </Carousel>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
