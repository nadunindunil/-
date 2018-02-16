import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../pages/rootReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
