import React, { Component } from 'react';
import { Container, H1 } from '../styles/CategoryList';

import GetPDetails from './ProductDetails';


class PDetails extends Component {
  render() {
    return (
      <>
        <Container>
          <GetPDetails />
        </Container>
      </>
    )
  }
}

export default PDetails;