import React, { Component } from 'react';

import styled from 'styled-components';

const PDPWrapper = styled.section`
  width: 100%;
  display: flex;
`;

const ImageWrap = styled.div`
  width: 60%;
`;

const ImageSamplesWrap = styled.div``;
const MainImageWrap = styled.div``;

const DetailsWrap = styled.div`
  width: 40%;
`;

const NameWrap = styled.div``;
const SizesWrap = styled.div``;
const PriceWrap = styled.div``;
const AddToCartBtn = styled.div``;
const DescriptionWrap = styled.div``;

export default class ProductDescPage extends Component {
  render() {
    return (
      <PDPWrapper>
        <ImageWrap>
          <ImageSamplesWrap>

          </ImageSamplesWrap>
          <MainImageWrap>

          </MainImageWrap>
        </ImageWrap>
        <DetailsWrap>
          <NameWrap>

          </NameWrap>
          <SizesWrap>

          </SizesWrap>
          <PriceWrap>

          </PriceWrap>
          <AddToCartBtn>

          </AddToCartBtn>
          <DescriptionWrap>

          </DescriptionWrap>
        </DetailsWrap>
      </PDPWrapper>
    )
  }
}
