export const setBands = (state = [], action) => {
  switch(action.type) {
    case 'GET_BANDS':
      return action.bands
    default:
      return state
  }
}