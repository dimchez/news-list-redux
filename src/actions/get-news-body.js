import { NEWS_BODY_REQUEST, NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } from './action-types';
import thunk from 'redux-thunk';
import api from 'nordnet-next-api';
import isNode from 'detect-node';

const url = isNode ? 'http://localhost:8080/' : '';

export function newsBodyRequest(data) {
  return {
    data,
    type: NEWS_BODY_REQUEST,
  };
}

export function newsBodyRequestSuccess(data) {
  return {
    data,
    type: NEWS_BODY_REQUEST_SUCCESS,
  };
}

export function newsBodyRequestFailure(data) {
  return  {
    data,
    type: NEWS_BODY_REQUEST_FAILURE,
  }
}

export default function getNewsBody({ news_id }) {
  return (dispatch, getState) => {
    dispatch(newsBodyRequest({ news_id }));
    const newsBody = getState().newsBody.newsBody[news_id];

    if (!newsBody) {
      return api.get(`${url}/api/news/{news_id}`, { news_id })
        .then(({ data }) => dispatch(newsBodyRequestSuccess(data)))
        .catch(({ data }) => dispatch(newsBodyRequestFailure(data)));
    } else {
      dispatch(newsBodyRequestSuccess([newsBody]));
    }
  };
}
