import { combineReducers } from 'redux';
import news from './news';
import isFetching from './news-is-fetching';
import offset from './news-offset';
import hasMore from './news-has-more';
import hasLoaded from './news-has-loaded';

const newsListReducers = combineReducers({
  news,
  isFetching,
  offset,
  hasMore,
  hasLoaded,
});

export default newsListReducers;
