import React, { Component } from 'react';

import styled from 'styled-components';
import CartOverlay from './CartOverlay';
import { GetCategory } from '../Graphql/Queries';

const Container = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`;


export default class Category extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <GetCategory />
        <CartOverlay />
      </Container>
    )
  }
}
