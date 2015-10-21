import { actionTypes } from 'actions';

const { NEWS_BODY_REQUEST, NEWS_BODY_REQUEST_SUCCESS, NEWS_BODY_REQUEST_FAILURE } = actionTypes;
const initialState = false;

export default function isFetching(state = initialState, action) {
  switch (action.type) {
    case NEWS_BODY_REQUEST:
      return true;
    case NEWS_BODY_REQUEST_SUCCESS:
    case NEWS_BODY_REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
}
