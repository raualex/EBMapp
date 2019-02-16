export const getBands = (bandsInfo) => ({
  type: 'GET_BANDS',
  bands: bandsInfo
});

export const selectBand = (bandInfo) => ({
  type: 'SELECTED_BAND',
  band: bandInfo
})