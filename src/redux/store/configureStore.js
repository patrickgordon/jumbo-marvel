import { createStore, compose } from 'redux';
import rootReducer from '../modules';

// ======================================================
// Store Enhancers
// ======================================================
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);


export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
