import * as actionTypes from './action-types';
import getNews from './get-news';
import getNewsBody from './get-news-body';

export default {
  actionTypes,
  actions: {
    getNews,
    getNewsBody,
  },
};
