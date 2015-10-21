import React from 'react';
import NewsItem from './news-item';

class NewsList extends React.Component {
  renderGetNewsButton() {
    const { hasMore, getNews } = this.props;

    if(!hasMore) {
      return null;
    }

    return (
      <button onClick={ getNews }>Get more news</button>
    );
  }

  renderNews() {
    const { news, getNewsBody } = this.props;

    if(!news.length) {
      return (
        <div>No news to display</div>
      );
    }

    return (
      <ul>
        { news.map(newsItem =>
            <NewsItem key={ newsItem.news_id } newsItem={ newsItem } onSelect={ getNewsBody }/>) }
      </ul>
    );
  }

  render() {
    const { isFetching, hasLoaded } = this.props;

    if(isFetching && !hasLoaded) {
      return (
        <div>Loading..</div>
      );
    }

    return (
      <div>
        { this.renderNews() }
        { this.renderGetNewsButton() }
      </div>
    );
  }
}

NewsList.propTypes = {
  news: React.PropTypes.array.isRequired,
};

export default NewsList;
