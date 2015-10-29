import { actionTypes } from './../../actions';

const { NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } = actionTypes;
const initialState = [];

export default function news(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST_SUCCESS:
      return action.data ? state.concat(action.data) : state;
    case NEWS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
