import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';

// ======================================================
// Store Enhancers
// ======================================================
const middleware = [thunk];


export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
};
