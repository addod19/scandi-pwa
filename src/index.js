import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { client } from './Graphql/constants';
import store from './Redux/Store';

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
    <ApolloProvider store={store} client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
