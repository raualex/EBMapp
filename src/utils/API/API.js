export const retrieveBands = async () => {
  const response = await fetch('/api/v1/ebm_bands')
  const data = await response.json()
  return data
}