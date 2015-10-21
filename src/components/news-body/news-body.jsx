import React from 'react';

class NewsBody extends React.Component {
  shouldComponentUpdate({ isFetching: nextIsFetching, selected: nextSelected }) {
    const { isFetching, selected } = this.props;
    return isFetching !== nextIsFetching || selected !== nextSelected;
  }

  render() {
    const { selected, isFetching, newsBody } = this.props;

    if(!selected) {
      return null;
    }

    if(isFetching) {
      return (
        <div>Loading news body..</div>
      );
    }

    return (
      <div>{ newsBody ? newsBody.body : 'No news content' }</div>
    );
  }
}

export default NewsBody;
