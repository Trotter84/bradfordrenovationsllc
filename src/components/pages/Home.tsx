import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import JeffsDen2 from '../../images/IMG_8042.CR2-ed.jpg';
import Kitchen from '../../images/kitchenBackgroundFULL.jpg';
import KitchenWindow from '../../images/kitchenSinkWindow.jpg';
import BathroomTub from '../../images/bathroomTub.jpg';
import Bathroom from '../../images/whiteMarbleBathroom.jpg';
import FlowerGarden from '../../images/flowerGarden.jpg';
import LaundryRoom from '../../images/IMG_8322.jpg';


const QuoteButton = Styled.button`
  margin-top: 2em;
  margin-left: 14em;
  width: 200px;
  height: 50px;
  font-size: 20px;
  appearance: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }

`


class Home extends Component {

  render() {
    return(
      <div id='homeMainContainer'>

        <Link to={'/contact-us'}>
          <QuoteButton>Get A Quote Now</QuoteButton>
        </Link>


        <div id='carouselContainer'>
          <div id='carouselSubContainer'>
            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} showIndicators={false}>

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
                  <img src={FlowerGarden} className='frontPageImage' alt='Garden on a wall with steps leading up' />
                  <p className='homeBottomPhotoText'>Beautiful Gardens</p>
                </div>

                <div className='frontPagePhoto5'>
                  <img src={LaundryRoom} className='frontPageImage' alt='Laundry room' />
                  <p className='homeBottomPhotoText'>Efficient Laundry Rooms</p>
                </div>

                <div className='frontPagePhoto6'>
                  <img src={Bathroom} className='frontPageImage' alt='Bathroom showing stairs on left, sinks in the middle, and toilet in small room on the right' />
                  <p className='homeBottomPhotoText'>Spectacular Bathrooms</p>
                </div>

                <div className='frontPagePhoto7'>
                <img src={KitchenWindow} className='frontPageImage' alt='Kitchen window' />
                  <p className='homeBottomPhotoText'>Breathtaking Kitchens</p>
                </div>

            </Carousel>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
