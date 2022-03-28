import React, { Component } from 'react';

import styled from 'styled-components';

const CartOverlayContainer = styled.section`
  position: absolute;
  width: 325px;
  height: 540px;
  left: 1028px;
  top: 78px;

  background: #FFFFFF;
`;

const H2 = styled.h2`
  position: absolute;
  width: 118px;
  height: 26px;
  left: 1044px;
  top: 86px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  text-align: right;

  color: #1D1F22;

`;

const Row1 = styled.section``;
const Column1 = styled.div``;
const Column2 = styled.div``;


const Row2 = styled.section``;
const Row3 = styled.section``;

export default class CartOverlay extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CartOverlayContainer className='modal'>
        
        <H2>My bag, {"2 items"}</H2>
        <Row1>
          <Column1>
          
          </Column1>
          <Column2>
          
          </Column2>
        </Row1>
        <Row2>

        </Row2>
        <Row3>

        </Row3>
      </CartOverlayContainer>
    )
  }
}
