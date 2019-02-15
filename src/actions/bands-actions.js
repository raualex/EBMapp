export const getBands = (bandInfo) => ({
  type: 'GET_BANDS',
  bands: bandInfo
});

export const selectBand = (bandInfo) => ({
  type: 'SELECTED_BAND',
  band: bandInfo
})