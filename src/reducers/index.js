import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';
import { setBands, setSelectedBand } from './bands-reducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  bandsList: setBands,
  selectedBand: setSelectedBand
});

export default rootReducer;