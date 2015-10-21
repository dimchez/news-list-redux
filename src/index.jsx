import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import devtools from './devtools';
import store from './configure-store';

const AppWithDevTools = devtools(App, store);

ReactDOM.render(<AppWithDevTools />, document.getElementById('app'));
