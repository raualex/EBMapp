import { isLoading, hasErrored } from '../actions';
import { getBands } from '../actions/bands-actions'
import { retrieveBands } from '../utils/API/API.js';

export const fetchBands = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const bandsInfo = await retrieveBands()
      if (bandsInfo) {
        dispatch(isLoading(false))
      }
      dispatch(getBands(bandsInfo))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}