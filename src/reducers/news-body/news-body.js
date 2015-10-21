import { actionTypes } from 'actions';

const { NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } = actionTypes;
const initialState = {};

const newsBodyToState = (result, data) => Object.assign({}, result, { [data.news_id]: data });

export default function newsBody(state = initialState, action) {
  switch (action.type) {
    case NEWS_BODY_REQUEST_SUCCESS:
      return action.data ? action.data.reduce(newsBodyToState, state) : state;
    case NEWS_BODY_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
