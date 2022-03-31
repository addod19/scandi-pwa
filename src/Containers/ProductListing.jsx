import React, { Component } from 'react';

import { Container, H1 } from '../styles/CategoryList';

import {
  useQuery,
  gql
} from "@apollo/client";
import { Link } from "react-router-dom";

import { ProductCardWrap, ProductCard, Img, H3 } from "../styles/Queries";

const GetProductListings = () => {
  const { loading, error, data } = useQuery(GET_CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return data.category.products.map(({ id, inStock, gallery, name }) => (
    <ProductCardWrap key={id} data={data}>
      <Link key={id} to={{ pathname: `/id=${id}`, state: data }} >
        <ProductCard >
          {inStock ? null : <H3>Out of Stock</H3>}
          <Img src={gallery[0]} alt="sample" />
          <p>
            {name}
          </p>
          <span>
            $50.00
          </span>
        </ProductCard>
      </Link>
    </ProductCardWrap>
  ));
}

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

export default class ProductListing extends Component {

  render() {
    return (
      <>
        <H1>Category name</H1>
        <Container>
          <GetProductListings />
        </Container>
      </>
      
    )
  }
}
