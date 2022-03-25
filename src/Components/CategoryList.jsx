import React, { Component } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

import styled from 'styled-components';

const ProductCardWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;

    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* --c-white */

    background: #FFFFFF;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    border: 1px solid black;

    height: 450px;
    width: 400px;
`;

const ProductCard = styled.div`

`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 356px;
  height: 388px
`;



const GET_CATEGORY = gql`
  query GetCategory {
    category {
      name
        products {
          id
          name
    	    inStock
    	    gallery
    	    description
    	    category
    	    attributes {
      	    name
    	    }
  		    prices {
      	    currency {
        	    label
      	    }
    	    }
    	    brand
        }
    }
  }
`;

function GetCategory() {
  const { loading, error, data } = useQuery(GET_CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  
  return data.category.products.map(({ id, gallery, description, inStock, name, brand }) => (
    <ProductCardWrap key={id}>
      <ProductCard >
        {inStock ? null : <h3>Out of Stock</h3>}
        <Img src={gallery[0]} alt="sample" />
        <p>
          {name}
        </p>
        <span>
          $50.00
        </span>
      </ProductCard>
    </ProductCardWrap>
  ));
}



export default class Category extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <GetCategory />
      </Container>
    )
  }
}
