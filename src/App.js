import React from 'react';
import './App.css';

import {
  useQuery,
  gql
} from "@apollo/client";


const GET_PRODUCT = gql`
  query GetProduct {
    product(id: "huarache-x-stussy-le")  {
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
`;

function GetProduct() {
  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  
  return (
    <>
      <h1>Category</h1>
    </>
  )
  // return data.product.map(({ id, brand, category, description, inStock, name, prices, attributes }) => (
  //   <div key={id}>
  //     <p>
  //       {name}: {brand}
  //     </p>
  //   </div>
  // ));
}

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <h1>Welcome to Scandi-PWA</h1>
        <GetProduct />
      </div>
    );
  }
}

export default App;
