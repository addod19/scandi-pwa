import axios from 'axios';
import AllCurrencySymbols from './AllCurrencySymbols';

const GETCATEGORIES = () => dispatch => {
  const categoriesResult = [];
};

const GETPRODUCT = id => async dispatch => {

};

const FILTERCURRENCYSYMBOLS = () => async dispatch => {
  AllCurrencySymbols.map();
  const data = await axios.get();
  dispatch({
    type: 'FILTER_CURRENCY',
    payload: data,
  });
};

const changeFilter = filter => ({
  type: 'FILTER_CURRENCY',
  filter,
});

export {
  GETCATEGORIES, GETPRODUCT, FILTERCURRENCYSYMBOLS, changeFilter,
};
