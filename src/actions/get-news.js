import { NEWS_REQUEST, NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } from './action-types';
import thunk from 'redux-thunk';
import api from 'nordnet-next-api';
import isNode from 'detect-node';

const url = isNode ? 'http://localhost:8080/' : '';

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
    const { news: { offset, limit }} = getState();
    dispatch(newsRequest());
    return api.get(`${url}/api/news`, { offset, limit })
      .then(({ data }) => dispatch(newsRequestSuccess(data)))
      .catch(({ data }) => dispatch(newsRequestFailure(data)));
  };
}
