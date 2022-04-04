import React, { Component } from 'react';

// import { connect } from 'react-redux';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

class MyCurrency extends Component {
  constructor(props) {
    super(props);
    // console.log(props.data.currencies);
    this.state = {
      label: props.data.currencies,
      symbol: props.data.currencies,
    }


  }
  render() {
    
    return (
      <div>{"$"}</div>
    )
  }
}

const GET_CURRENCY = gql`
  query GetCurrency {
    currencies {
      label,
      symbol
    }
  }
`;

const Currency = graphql(GET_CURRENCY)(MyCurrency);

export default Currency;
