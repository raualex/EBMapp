export const setBands = (state = [], action) => {
  switch(action.type) {
    case 'GET_BANDS':
      return action.bands
    default:
      return state
  }
}

export const setSelectedBand = (state = {}, action) => {
  switch(action.type) {
    case 'SELECTED_BAND':
      return action.band
    default:
      return state
  }
}