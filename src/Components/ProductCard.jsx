import React, { Component } from 'react';


export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    console.log(props.data.category.products);
  }

  render() {
    const { id, gallery, description, prices } = this.props.data.category.products;
    return (
      <ProductCardWrap key={id}>
          <h1>{description}</h1>
      </ProductCardWrap>
    )
  }
}
