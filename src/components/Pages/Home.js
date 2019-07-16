import React, { Component } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../App.css'
import BackgroundImage from './BackgroundImage.js';


const FirstBlock = Styled.div`
  float: left;
  background-color: #70c2c4;
  position: absolute;
  height: 35.250em;
  width: 82.125em;
  border-radius: 0 35px 35px 0;
  z-index: 2;
  top: 650px;
  opacity: 0.8;
`

const SecondBlock = Styled.div`
  float: right;
  left: 275px;
  background-color: #70c2c4;
  position: absolute;
  height: 35.250em;
  width: 82.125em;
  border-radius: 35px 0 0 35px;
  z-index: 2;
  top: 1450px;
  opacity: 0.8;
`

const Title = Styled.h2`
  padding: 3em 0 0 3em;
`

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount () {
    document.title='Bradford Renovations LLC'

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
        <div>
          <FirstBlock data-aos="fade-right">
            <Title>Info...</Title>
          </FirstBlock>
          <SecondBlock data-aos="fade-left">
            <Title>More Info...</Title>
          </SecondBlock>
        </div>
      </div>
    )
  }
}

export default Home;
