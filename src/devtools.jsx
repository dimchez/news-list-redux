import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState} from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export function createStoreWithDevTools(middleware, debug = false) {
  return debug ?
    compose(middleware, devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(createStore) :
    middleware(createStore);
}

export const DebugPanelComponent = ({ store, monitor }) => {
  return (
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ monitor } />
    </DebugPanel>
  );
};

export default (Component, store, debug = false) =>
  class extends React.Component {
    render() {
      const debugPanel = debug ? <DebugPanelComponent store={ store } monitor={ LogMonitor } /> : null;
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
