import { actionTypes } from 'actions';

const { NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } = actionTypes;
const initialState = {};

export default function newsBody(state = initialState, action) {
  switch (action.type) {
    case NEWS_BODY_REQUEST_SUCCESS:
      return action.data.reduce((result, data) => Object.assign({}, result, { [data.news_id]: data }), state);
    case NEWS_BODY_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
