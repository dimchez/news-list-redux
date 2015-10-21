import { actionTypes } from 'actions';

const { NEWS_BODY_REQUEST } = actionTypes;
const initialState = 0;

export default function selected(state = initialState, action) {
  switch (action.type) {
    case NEWS_BODY_REQUEST:
      return action.data.news_id;
    default:
      return state;
  }
}
