const initialState = {};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload ];
    default:
      return state
  }
}
