import * as types from './HomeActions';
import initialState from '../initialState';

export default function HomeReducer(state = initialState.number, action) {
  // still use this is use for testing
  switch (action.type) {
    case types.ACTION_SAMPLE:
      return action.number;
    default:
      return state;
  }
}
