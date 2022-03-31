import { combineReducers } from 'redux';

import Categories from './Categories';
import filterCurrencies from './filterCurrencies';

export default combineReducers({ filterCurrencies, Categories });
