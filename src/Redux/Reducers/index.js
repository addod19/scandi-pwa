import { combineReducers } from 'redux';

import Categories from './Categories';
import filterCurrencies from './filterCurrencies';
import { cartReducer } from './cartReducer';

export default combineReducers({ filterCurrencies, Categories, cartReducer });
