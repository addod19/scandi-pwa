import React, { Component } from 'react';
import { PDPWrapper, ImageWrap, ImageSamplesWrap, MainImageWrap, 
  DetailsWrap, NameWrap, SizesWrap, PriceWrap, AddToCartBtn,
  DescriptionWrap, SmallImg, BigImg, PDTName, SizesLabel, SizesList,
  SizesBtn, XSmall, Small, Medium, Large, PriceLabel, PriceAmount,
  DescText, Apollo, RunShort, AddToCarAction
} from '../styles/ProductDetails';

import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import CartOverlay from '../Components/CartOverlay';


class ProductWithDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props,
    }
  }

  render() {
    console.log(window.location.pathname.replace('/', ''));
    // let { productId } = window.location.pathname.replace('/', '');
    console.log(this.state.data);
    return (
      <PDPWrapper>
        <ImageWrap>
          <ImageSamplesWrap>
            <SmallImg src="https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png" alt="check me" />
            <SmallImg src="https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png" alt="check me" />
            <SmallImg src="https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png" alt="check me" />
          </ImageSamplesWrap>
          <MainImageWrap>
            <BigImg src="https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png" alt="check me" />
          </MainImageWrap>
        </ImageWrap>
        <DetailsWrap>
          <NameWrap>
            <PDTName>
              <Apollo>
                Apollo
              </Apollo><br /> 
              <RunShort>
                Running Short
              </RunShort>
            </PDTName>
          </NameWrap>
          <SizesWrap>
            <SizesLabel>SIZE:</SizesLabel>
            <SizesList>
              <XSmall>
                <SizesBtn>
                  XS
                </SizesBtn>
              </XSmall>
              <Small>
                <SizesBtn>
                  S
                </SizesBtn>
              </Small>
              <Medium>
                <SizesBtn>
                  M
                </SizesBtn>
              </Medium>
              <Large>
                <SizesBtn>
                  L
                </SizesBtn>
              </Large>
            </SizesList>
          </SizesWrap>
          <PriceWrap>
            <PriceLabel>PRICE:</PriceLabel>
            <PriceAmount>${50.00}</PriceAmount>
          </PriceWrap>
          <AddToCartBtn>
            <AddToCarAction>ADD TO CART</AddToCarAction>
          </AddToCartBtn>
          <DescriptionWrap>
            <DescText>
              Find stunning women's cocktail dresses and party dresses.
              Stand out in lace and metallic cocktail dresses and party dresses 
              from all your favorite brands.
            </DescText>
          </DescriptionWrap>
        </DetailsWrap>
        <CartOverlay data={this.props} />
      </PDPWrapper>
    )
  }
}

const GetProductDetails = gql`
  query product($id: id) {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }  
`;

const ProductDetails = graphql(GetProductDetails, {
  name: 'product',
  options: () => {
    return { variables: { id: window.location.pathname.replace('/', '') }};
  }
})(ProductWithDetails);

export default ProductDetails;
