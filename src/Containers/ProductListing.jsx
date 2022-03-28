import React, { Component } from 'react';

import { Container } from '../styles/CategoryList';

import { GetProductListings } from '../Graphql/Queries';

export default class ProductListing extends Component {

  render() {
    return (
      <Container>
        <GetProductListings />
      </Container>
    )
  }
}
