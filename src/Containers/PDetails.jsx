import React, { Component } from 'react';
import { Container, H1 } from '../styles/CategoryList';
import { PDPWrapper, ImageWrap, ImageSamplesWrap, MainImageWrap, 
    DetailsWrap, NameWrap, SizesWrap, PriceWrap, AddToCartBtn,
    DescriptionWrap, SmallImg, BigImg, PDTName, SizesLabel, SizesList,
    SizesBtn, XSmall, Small, Medium, Large, PriceLabel, PriceAmount,
    DescText, Apollo, RunShort, AddToCarAction
} from '../styles/ProductDetails';
import {
  useQuery,
  gql
} from "@apollo/client";

import { useDispatch } from 'react-redux';

// import { Title, Label } from '../styles/ProductListing';

const GetPDetails = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT);
  const dispatch = useDispatch();

  console.log(data);
//   dispatch(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(window.location.pathname.replace('/', ''));
  return (
    <PDPWrapper>
        <ImageWrap>
          <ImageSamplesWrap>
            <SmallImg src={data.product.gallery[0]} alt="check me" />
            <SmallImg src={data.product.gallery[0]} alt="check me" />
            <SmallImg src={data.product.gallery[0]} alt="check me" />
          </ImageSamplesWrap>
          <MainImageWrap>
            <BigImg src={data.product.gallery[0]} alt="check me" />
          </MainImageWrap>
        </ImageWrap>
        <DetailsWrap>
          <NameWrap>
            <PDTName>
              <Apollo>
                {data.product.brand}
              </Apollo><br /> 
              <RunShort>
                {data.product.category}
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
            <PriceAmount>${data.product.prices[0].amount}</PriceAmount>
          </PriceWrap>
          <AddToCartBtn>
            <AddToCarAction>ADD TO CART</AddToCarAction>
          </AddToCartBtn>
          <DescriptionWrap>
            <DescText>
              {data.product.description}
            </DescText>
          </DescriptionWrap>
        </DetailsWrap>
      </PDPWrapper>
  );
}

const GET_PRODUCT = gql`
  query GetPDetails {
    product(id: "${window.location.pathname.replace('/', '')}") {
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
  }
`;

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