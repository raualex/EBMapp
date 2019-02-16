import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './general-reducers';
import { setBands, setSelectedBand } from './bands-reducers';
import { setAlbums } from './albums-reducers';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  bandsList: setBands,
  selectedBand: setSelectedBand,
  albumsList: setAlbums
});

export default rootReducer;