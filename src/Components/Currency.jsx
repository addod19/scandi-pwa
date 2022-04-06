import React, { Component } from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import { CurrencyWrap, CurrencySymbol, CurrencyLabel,
  CurrencyLabelWrap
} from '../styles/Currency';

class MyCurrency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    }
  }

  render() {
    let currencyList = this.props.data.currencies;
    console.log(currencyList);
    return (  
      <CurrencyWrap className='closeCurrency'>
        { 
          currencyList?.map((currency, index) => {
            return <CurrencyLabelWrap key={index}>
              <CurrencySymbol>{currency.symbol}</CurrencySymbol>
              <CurrencyLabel>{currency.label}</CurrencyLabel>
            </CurrencyLabelWrap>;
          })
        }
      </CurrencyWrap>
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
