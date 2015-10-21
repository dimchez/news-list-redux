import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsListReducers } from './news-list';
import { newsBodyReducers } from './news-body';
import { createStoreWithDevTools } from './devtools';

const reducers = combineReducers({
  newsList: newsListReducers,
  newsBody: newsBodyReducers,
});

const createStoreWithMiddleware = createStoreWithDevTools(applyMiddleware(thunk));
export default createStoreWithMiddleware(reducers);
