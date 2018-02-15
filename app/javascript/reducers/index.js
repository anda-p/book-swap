import {combineReducers} from 'redux';
import books from './bookReducer';
import filters from './filterReducer';

const rootReducer = combineReducers({
  books,
  filters
});

export default rootReducer;