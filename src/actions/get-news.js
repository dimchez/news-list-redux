import { NEWS_REQUEST, NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } from './action-types';
import thunk from 'redux-thunk';
import api from 'nordnet-next-api';

export function newsRequest() {
  return {
    type: NEWS_REQUEST,
  };
}

export function newsRequestSuccess(data) {
  return {
    data,
    type: NEWS_REQUEST_SUCCESS,
  };
}

export function newsRequestFailure(data) {
  return  {
    data,
    type: NEWS_REQUEST_FAILURE,
  }
}

export default function getNews() {
  return (dispatch, getState) => {
    const state = getState();
    const offset = state.news.offset;
    dispatch(newsRequest());
    return api.get('/api/news', { offset, limit: 10 })
      .then(({ data }) => dispatch(newsRequestSuccess(data)))
      .catch(({ data }) => dispatch(newsRequestFailure(data)));
  };
}
