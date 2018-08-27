import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
