export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrord = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});