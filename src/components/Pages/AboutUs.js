import React, { Component } from 'react';
import Styled from 'styled-components';

const Hello = Styled.div`
  padding-top: 1000px;
  background-color: red;
`


class AboutUs extends Component {

  componentDidMount() {
    document.title='About Us'
  }

  render() {
    return (
      <Hello>
        <div>Hello doooods</div>
      </Hello>
    )
  };
}

export default AboutUs;
