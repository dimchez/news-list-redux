import React from 'react';
import { connect } from 'react-redux';
import { actions } from './../actions';
import { NewsList } from './news-list';

export function mapStateToProps({ news }) {
  return news;
}

export function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(actions.getNews()),
    getNewsBody: data => dispatch(actions.getNewsBody(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
