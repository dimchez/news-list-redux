import { NEWS_BODY_REQUEST, NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } from './action-types';
import thunk from 'redux-thunk';
import api from 'nordnet-next-api';

export function newsBodyRequest() {
  return {
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

export default function getNewsBody() {
  return (dispatch, getState) => {
    const state = getState();
    const item_id = state.newsBody.selected;
    dispatch(newsBodyRequest());
    return api.get('/api/news/{item_id}', { item_id })
      .then(({ data }) => dispatch(newsBodyRequestSuccess(data)))
      .catch(({ data }) => dispatch(newsBodyRequestFailure(data)));
  };
}
