import React, { Component } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import '../../App.css'
import BackgroundImage from './BackgroundImage.js';

const FirstBlock = Styled.div`
  background-color: #70c2c4;
  position: absolute;
  height: 500px;
  width: 1250px;
  z-index: 2;
  top: 850px;
  opacity: 0.8;

`

class Home extends Component {

  render() {
    return (
      <div>
        <BackgroundImage />
        <div data-aos="fade-right">
          <FirstBlock data-aos="fade-right">
            <h1 class="item" data-aos="fade-right">Hello</h1>
          </FirstBlock>
        </div>
      </div>
    )
  }
}

export default Home;
