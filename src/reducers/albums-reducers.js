export const setAlbums = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALBUMS':
      return action.albums
    default:
      return state
  }
}