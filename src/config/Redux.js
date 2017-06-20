import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from '../reducers'
import middleware from './reduxMiddlewares'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(reducers, /* preloadedState, */ composeEnhancers( middleware ));

store.subscribe(() => {
  console.log("Store changed ", store.getState())
});

store.dispatch({ type: 'CHANGE_NAME', payload: 'Verik' });
store.dispatch({ type: 'THROW_ERROR' });
store.dispatch({ type: 'CHANGE_AGE', payload: '32' });
store.dispatch({ type: 'ADD_MESSAGE', payload: 'message' });

const ReduxProvider = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);

export default ReduxProvider
