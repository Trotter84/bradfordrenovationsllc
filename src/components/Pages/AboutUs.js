import React, { Component } from 'react';
import Styled from 'styled-components';
import BackgroundImage from './BackgroundImage.js';


const Hello = Styled.div`
  position: absolute;
  z-index: 2;
  top: 500px;
`


class AboutUs extends Component {

  componentDidMount() {
    document.title='About Us'
  }

  render() {
    return (
      <div>
        <BackgroundImage />
        <Hello>
          <h1>Hello doooods</h1>
        </Hello>
      </div>
    )
  };
}

export default AboutUs;
