import React, { Component } from 'react';

import { Container, H1 } from '../styles/CategoryList';

import GetProductListings from '../Graphql/Queries';

export default class ProductListing extends Component.Pure {
  render() {
    return (
      <>
        <H1>Category name</H1>
        <Container>
          <GetProductListings />
        </Container>
      </>
    );
  }
}
