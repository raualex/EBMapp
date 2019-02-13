export const retrieveBands = async () => {
  const response = await fetch('/api/v1/ebm_bands')
  console.log(response)
  const data = await response.text()
  return data
}