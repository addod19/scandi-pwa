import axios from 'axios';
import AllCurrencySymbols from './AllCurrencySymbols';

const GETCATEGORIES = () => dispatch => {
  // const categoriesResult = [];
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

const GETPRODUCT = id => async dispatch => {

};

const FILTERCURRENCYSYMBOLS = (AllCurrencySymbols, symbol) => async dispatch => {
  dispatch({
    type: "FILTER_CURRENCY_BY_SYMBOL",
    payload: {
      symbol: symbol,
      items:
        symbol === ""
          ? AllCurrencySymbols
          : AllCurrencySymbols.filter((currency) => currency.symbol === symbol)
    },
  });
};

const changeFilter = filter => ({
  type: 'FILTER_CURRENCY',
  filter,
});

export {
  GETCATEGORIES, GETPRODUCT, FILTERCURRENCYSYMBOLS, changeFilter,
};
