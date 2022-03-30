import React, { Component } from 'react';

import { CartContainer, HeaderTextWrap, HeaderText, CartListContainer, Row, Col1,
  Col2, Name, Apollo, RunShort, Price, Sizes, Btn } from '../styles/Cart';

export default class Cart extends Component {
  render() {
    return (
      <CartContainer>
        <HeaderTextWrap>
          <HeaderText>Cart</HeaderText>
        </HeaderTextWrap>
        <CartListContainer>
          <Row>
            <Col1>
              <Name>
                <Apollo>Apollo</Apollo>
                <br />
                <RunShort>Running Short</RunShort>
              </Name>
              <Price>
                $
                {50.00}
              </Price>
              <Sizes>
                <Btn>S</Btn>
                <Btn>M</Btn>
              </Sizes>
            </Col1>
            <Col2>
            
            </Col2>
          </Row>
        </CartListContainer>
      </CartContainer>
    )
  }
}
