import React, { Component } from 'react';
import {
  PDPWrapper, ImageWrap, ImageSamplesWrap, MainImageWrap,
  DetailsWrap, NameWrap, SizesWrap, PriceWrap, AddToCartBtn,
  DescriptionWrap, SmallImg, BigImg, PDTName, SizesLabel, SizesList,
  SizesBtn, XSmall, Small, Medium, Large, PriceLabel, PriceAmount,
  DescText, Apollo, RunShort, AddToCarAction,
} from '../styles/ProductDetails';

export default class ProductDetails extends Component.Pure {
  render() {
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
              </Apollo>
              <br />
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
            <PriceAmount>
              $
              {50.00}
            </PriceAmount>
          </PriceWrap>
          <AddToCartBtn>
            <AddToCarAction>ADD TO CART</AddToCarAction>
          </AddToCartBtn>
          <DescriptionWrap>
            <DescText>
              Find stunning women&#39;s cocktail dresses and party dresses.
              Stand out in lace and metallic cocktail dresses and party dresses
              from all your favorite brands.
            </DescText>
          </DescriptionWrap>
        </DetailsWrap>
      </PDPWrapper>
    );
  }
}
