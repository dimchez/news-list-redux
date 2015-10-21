import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState} from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export function createStoreWithDevTools(middleware) {
  return DEBUG ?
    compose(middleware, devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(createStore) :
    middleware(createStore);
}

export default (Component, store) =>
  class extends React.Component {
    createDebugPanel() {
      if(!DEBUG) {
        return null;
      }

      return (
        <DebugPanel top right bottom>
          <DevTools store={ store } monitor={ LogMonitor } />
        </DebugPanel>
      );
    }

    render() {
      return (
        <div>
          <Provider store={ store }>
            <Component />
          </Provider>
          { this.createDebugPanel() }
        </div>
      );
    }
  }
