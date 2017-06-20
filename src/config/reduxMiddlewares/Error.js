const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('Error happened!', e);
  }
};

export default error
