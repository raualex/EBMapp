export const retrieveBands = async () => {
  const response = await fetch('http://localhost:3000/api/v1/ebm_bands')
  const data = await response.json()
  return data
}