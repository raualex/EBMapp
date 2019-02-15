export const retrieveBands = async () => {
  const response = await fetch('https://ebm-app.herokuapp.com/api/v1/ebm_bands')
  console.log(response)
  const data = await response.json()
  return data
}