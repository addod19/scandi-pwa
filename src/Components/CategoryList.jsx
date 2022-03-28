import React, { Component } from 'react';

import styled from 'styled-components';
import CartOverlay from './CartOverlay';
import { GetCategory } from '../Graphql/Queries';

export default class Category extends Component {

  render() {
    return (
      <Container>
        <GetCategory />
        <CartOverlay />
      </Container>
    )
  }
}
