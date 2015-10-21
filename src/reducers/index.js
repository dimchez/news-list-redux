import { combineReducers } from 'redux';
import newsListReducers from './news-list';
import newsBodyReducers from './news-body';

const reducers = combineReducers({
  news: newsListReducers,
  newsBody: newsBodyReducers,
});

export default reducers;
