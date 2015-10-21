import { actionTypes } from 'actions';

const { NEWS_REQUEST, NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } = actionTypes;
const initialState = false;

export default function isFetching(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return true;
    case NEWS_REQUEST_SUCCESS:
    case NEWS_REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
}
