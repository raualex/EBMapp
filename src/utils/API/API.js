export const retrieveBands = async () => {
  const response = await fetch('https://ebm-app.herokuapp.com/api/v1/ebm_bands')
  const data = await response.json()
  const cleanedBands = data.map((band) => {
    band.current_members = JSON.parse(band.current_members)
    band.past_members = JSON.parse(band.past_members)
    return band
  })
  return cleanedBands
}

export const retrieveAlbums = async () => {
  const response = await fetch('https://ebm-app.herokuapp.com/api/v1/albums')
  const data = await response.json()
  const cleanedAlbums = data.reduce((acc, album) => {
    let band_id = album.band_id
    if (!acc[band_id]) {
      acc[band_id] = []
    }
    return acc
  }, {})
  data.forEach((album) => {
    cleanedAlbums[album.band_id].push(album)
  })
  return cleanedAlbums
}