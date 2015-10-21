import React from 'react';
import NewsItem from './news-item';

class NewsList extends React.Component {
  renderShowMoreNewsButton() {
    if(!this.props.hasMore) {
      return null;
    }

    return (
      <button onClick={ this.props.getNews }>Get more news</button>
    );
  }

  render() {
    if(this.props.isFetching && !this.props.hasLoaded) {
      return (
        <div>Loading..</div>
      );
    }

    if(!this.props.news.length) {
      return (
        <div>No news to display</div>
      );
    }

    const news = this.props.news.map(
      newsItem => <NewsItem key={ newsItem.news_id } newsItem={ newsItem } onSelect={ this.props.showNewsBody }/>);

    return (
      <div>
        <ul>
          { news }
        </ul>
        { this.renderShowMoreNewsButton() }
      </div>
    );
  }
}

NewsList.propTypes = {
  news: React.PropTypes.array.isRequired,
};

export default NewsList;
