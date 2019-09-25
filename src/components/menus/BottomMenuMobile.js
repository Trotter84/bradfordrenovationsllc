import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Icon } from 'semantic-ui-react';


const Icons = Styled(Icon)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #2b3d4f;
  }

`


class BottomMenuMobile extends Component {
  render() {
    return(
      <div id='bottomMenuMainContainer'>
        <Link to={'/home'} className='iconContainers'>
          <Icons className='icons' size='large' name="home">
            <p className='bottomMenuText'>Home</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/about-us'} className='iconContainers'>
          <Icons className='icons' size='large' name="user">
            <p className='bottomMenuText'>About Us</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/contact-us'} className='iconContainers'>
          <Icons className='icons' size='large' name="comments">
            <p className='bottomMenuText'>Contact Us</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/careers'} className='iconContainers'>
          <Icons className='icons' size='large' name="briefcase">
            <p className='bottomMenuText'>Careers</p>
          </Icons>
        </Link>
      </div>
    )
  }
}


export default BottomMenuMobile;
