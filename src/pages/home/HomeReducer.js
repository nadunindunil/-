import * as types from './HomeActions';
import initialState from '../initialState';
import { combineReducers } from 'redux';

const ThoughtsReducer = function(state = [], action) {
  // still use this is use for testing
  switch (action.type) {
    case types.ADD_THOUGHTS:
      state = action.thoughts;
      console.log(action)
    default:
      return state;
  }
}

const FetchingReducer = function(state = {}, action) {
  // still use this is use for testing
  switch (action.type) {
    case types.START_FETCHING_THOUGHTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.FINISH_FETCHING_THOUGHTS:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

const HomeReducer = combineReducers({
  thoughts: ThoughtsReducer,
  isFetching: FetchingReducer
});

export default HomeReducer;