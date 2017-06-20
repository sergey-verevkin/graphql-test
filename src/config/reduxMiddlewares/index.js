import { applyMiddleware } from 'redux'

import loggerMiddleware from './Logger'
import errorMiddleware from './Error'

export default applyMiddleware(
  loggerMiddleware,
  errorMiddleware
);
