import React from 'react';
import { connect } from 'react-redux';
import { NewsBody } from './news-body';

export function mapStateToProps({ newsBody }) {
  const { selected, isFetching } = newsBody;
  return {
    selected,
    isFetching,
    newsBody: newsBody.newsBody[selected],
  };
}

export default connect(mapStateToProps)(NewsBody);
