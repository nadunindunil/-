import { combineReducers } from 'redux';
import thoughtsView from './home/HomeReducer';

const rootReducer = combineReducers({
  thoughtsView
});

export default rootReducer;
