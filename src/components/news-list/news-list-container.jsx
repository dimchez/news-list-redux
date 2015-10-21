import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'actions';
import NewsList from './news-list';

class NewsListContainer extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <NewsList { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return state.news;
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch(actions.getNews()),
    showNewsBody: data => dispatch(actions.showNewsBody(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);
