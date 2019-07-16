import React, { Component } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../App.css'
import BackgroundImage from './BackgroundImage.js';

const MainContainer = Styled.div`
`

const FirstBlock = Styled.div`
  float: left;
  background-color: #70c2c4;
  position: absolute;
  height: 500px;
  width: 1250px;
  border-radius: 0 35px 35px 0;
  z-index: 2;
  top: 650px;
  opacity: 0.8;
`

const SecondBlock = Styled.div`
  float: right;
  left: 200px;
  background-color: #70c2c4;
  position: absolute;
  height: 500px;
  width: 1250px;
  border-radius: 35px 0 0 35px;
  z-index: 2;
  top: 1450px;
  opacity: 0.8;
`

class Home extends Component {
  constructor(props){
    super(props);
  }
componentDidMount () {
  AOS.init({
    offset: 300,
    duration: 1000,
    once: true,
    opacity: 0.8,
  })
}

  render() {
    return (
      <div>
        <BackgroundImage />
        <MainContainer>
          <FirstBlock data-aos="fade-right">
          </FirstBlock>
          <SecondBlock data-aos="fade-left">
          </SecondBlock>
        </MainContainer>
      </div>
    )
  }
}

export default Home;
