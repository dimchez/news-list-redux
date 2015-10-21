import React from 'react';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { news_id } = this.props.newsItem;
    this.props.onSelect({ news_id });
  }

  render() {
    return (
      <li onClick={ this.onClick }>
        { this.props.newsItem.headline }
      </li>
    );
  }
}

NewsItem.propTypes = {
  newsItem: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

export default NewsItem;
