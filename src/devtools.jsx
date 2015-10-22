import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState} from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export function createStoreWithDevTools(middleware, debug = DEBUG) {
  return debug ?
    compose(middleware, devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(createStore) :
    middleware(createStore);
}

export const DebugPanelComponent = ({ store }) => {
  return (
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ LogMonitor } />
    </DebugPanel>
  );
};

export default (Component, store, debug = DEBUG) =>
  class extends React.Component {
    render() {
      const debugPanel = debug ? <DebugPanelComponent store={ store } /> : null;
      return (
        <div>
          <Provider store={ store }>
            <Component />
          </Provider>
          { debugPanel }
        </div>
      );
    }
  }
