import { actions } from './../actions';
import api from 'nordnet-next-api';

export default function initState(store) {
  return store.dispatch(actions.getNews());
}
