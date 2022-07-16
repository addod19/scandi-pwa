import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { client } from './Graphql/constants';
import store from './Redux/Store';
import { Provider } from 'react-redux';

import {
  ApolloProvider,
  gql
} from "@apollo/client";

client
  .query({
    query: gql`
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
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
