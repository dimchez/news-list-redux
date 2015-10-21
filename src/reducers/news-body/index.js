import { combineReducers } from 'redux';
import newsBody from './news-body';
import selected from './news-body-selected';
import isFetching from './news-body-is-fetching';

const newsBodyReducers = combineReducers({
  newsBody,
  selected,
  isFetching,
});

export default newsBodyReducers;
