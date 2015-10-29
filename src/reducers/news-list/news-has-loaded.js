import { actionTypes } from './../../actions';

const { NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } = actionTypes;
const initialState = false;

export default function hasLoaded(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST_SUCCESS:
      return true;
    case NEWS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
