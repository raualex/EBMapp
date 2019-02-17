import { isLoading, hasErrored } from '../actions';
import { getAlbums } from '../actions/albums-actions';
import { retrieveAlbums } from '../utils/API/API.js';

export const fetchAlbums = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const albumsInfo = await retrieveAlbums()
      if (albumsInfo) {
        dispatch(isLoading(false))
      }
      dispatch(getAlbums(albumsInfo))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}