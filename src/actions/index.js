import * as actionTypes from './action-types';
import getNews from './get-news';
import showNewsBody from './show-news-body';
import getNewsBody from './get-news-body';

export default {
  actionTypes,
  actions: {
    getNews,
    getNewsBody,
    showNewsBody,
  },
};
