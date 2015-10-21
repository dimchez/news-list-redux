import { actionTypes } from 'actions';

const { NEWS_REQUEST, NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } = actionTypes;
const initialState = true;

export default function hasMore(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST_SUCCESS:
      return !!action.data && !!action.data.length;
    case NEWS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
