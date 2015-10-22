import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import { createStoreWithDevTools } from './devtools';

const createStoreWithMiddleware = createStoreWithDevTools(applyMiddleware(thunk), DEBUG);
export default createStoreWithMiddleware(reducers);
