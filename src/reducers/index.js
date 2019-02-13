import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';
import { setBands } from './bands-reducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  bandsList: setBands
});

export default rootReducer;