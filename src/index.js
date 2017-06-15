import { combineReducers, createStore, applyMiddleware } from 'redux'

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
    case 'THROW_ERROR': {
      throw new Error('AAAAHHHH!')
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


const logger = (store) => (next) => (action) => {
  console.log('Action fired:', action);

  next(action);
};

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('Error happened!', e);
  }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("Store changed ", store.getState())
});

store.dispatch({ type: 'CHANGE_NAME', payload: 'Verik' });
store.dispatch({ type: 'THROW_ERROR' });
store.dispatch({ type: 'CHANGE_AGE', payload: '32' });
store.dispatch({ type: 'ADD_MESSAGE', payload: 'message' });
