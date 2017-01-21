import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import characters from './characters';

const rootReducer = combineReducers({
  characters,
  routing: routerReducer,
});

export default rootReducer;
