import React from 'react';
import koa from 'koa';
import ReactDOMServer from 'react-dom/server';

import api from 'nordnet-next-api';
import NewsListContainer from './../components/news-list-connected';

import App from './../app';
import devtools from './../devtools';
import initState from './init-state';
import { createStore } from './../configure-store';

const app = koa();

app
  .use(function *serve(next) {
    const store = createStore();
    yield initState(store);
    const app = renderApp(store);
    const state = store.getState();
    this.body = renderPage(state, app);
    yield next;
  })
  .listen(9004);

console.log('listening on port 9004');

function renderApp(store) {
  const AppWithDevTools = devtools(App, store, false);
  return ReactDOMServer.renderToString(<AppWithDevTools />);
}

function renderPage(state, app) {
  return `
    <!DOCTYPE html>
    <html class="no-js" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <style media="screen">
            li {
              padding: 5px 0;
            }
        </style>
        <title></title>
      </head>
      <body>
        <div id="app">${app}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(state)};
        </script>
        <script src="/sc/index.js"></script>
      </body>
    </html>`;
}
