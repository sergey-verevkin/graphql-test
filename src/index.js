import { combineReducers, createStore } from 'redux'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      // WRONG
      // state.name = action.payload;
      // return state;

      return { ...state, name: action.payload }
    }
    case 'CHANGE_AGE': {
      // WRONG
      // state.age = action.payload;
      // return state;

      return { ...state, age: action.payload }
    }
    default: {
      return state
    }
  }
};

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return [...state, action.payload ]
    }
    default: {
      return state
    }
  }
};

const reducers = combineReducers({
  user: userReducer,
  messages: messagesReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store changed ", store.getState())
});

store.dispatch({ type: 'CHANGE_NAME', payload: 'Verik' });
store.dispatch({ type: 'CHANGE_AGE', payload: '32' });
store.dispatch({ type: 'ADD_MESSAGE', payload: 'message' });
