import { actionTypes } from 'actions';

const { SHOW_NEWS_BODY } = actionTypes;
const initialState = 0;

export default function selected(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEWS_BODY:
      return action.data.news_id;
    default:
      return state;
  }
}
