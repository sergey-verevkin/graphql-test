const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    case 'CHANGE_AGE':
      return { ...state, age: action.payload };
    case 'THROW_ERROR':
      throw new Error('AAAAHHHH!');
    default:
      return state
  }
}
