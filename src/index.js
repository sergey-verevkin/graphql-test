import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC': {
      return state + action.payload;
    }
    case 'DEC': {
      return state - action.payload;
    }
    default: {
      return state
    }
  }
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Store changed ", store.getState())
});

store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'DEC', payload: 1 });
store.dispatch({ type: 'DEC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });

