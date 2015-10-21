import React from 'react';
import { NewsListContainer, NewsBodyContainer } from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <NewsBodyContainer { ...this.props } />
        <NewsListContainer { ...this.props } />
      </div>
    );
  }
}

export default App;
