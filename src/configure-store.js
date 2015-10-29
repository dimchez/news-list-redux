import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import isNode from 'detect-node';
import reducers from './reducers';
import { createStoreWithDevTools } from './devtools';

let initialState;
if(!isNode) {
  initialState = window.__INITIAL_STATE__;
}

const createStoreWithMiddleware = createStoreWithDevTools(applyMiddleware(thunk));

export function createStore() {
  return createStoreWithMiddleware(reducers, initialState);
}

export default createStoreWithMiddleware(reducers, initialState);
