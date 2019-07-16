import React, { Component } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundImage from './BackgroundImage.js';


const MainContainer = Styled.div`
  display: flex;
  justify-content: center;
`

const BoxContainer = Styled.div`
  background-color: #70c2c4;
  position: absolute;
  height: 82.500em;
  width: 88.375em;
  border-radius: 35px 35px 35px 35px;
  z-index: 2;
  top: 10em;
  opacity: 1;
`

const Title = Styled.h2`
  padding: 3em 0 0 3em;
`


class AboutUs extends Component {

  componentDidMount() {
    document.title='About Us'

    AOS.init({
      offset: 300,
      duration: 1000,
      once: true,
    })
  }

  render() {
    return (
      <div>
        <BackgroundImage />
        <MainContainer>
          <BoxContainer data-aos="fade-in">
            <Title>About Us...</Title>
          </BoxContainer>
        </MainContainer>
      </div>
    )
  };
}

export default AboutUs;
