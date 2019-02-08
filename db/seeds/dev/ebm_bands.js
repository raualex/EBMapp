const ebmBands = require('../../../src/ebmDatabase.js')

const createBand = (knex, band) => {
  return knex('ebm_bands').insert({
    band_name: band.bandName,
    current_members: JSON.stringify(band.currentMembers),
    past_members: JSON.stringify(band.pastMembers),
    still_active: band.stillActive,
    country_of_origin: band.countryOfOrigin
  }, 'id')
  .then(bandId => {
    let albumPromises = [];

    band.studioAlbums.forEach((album) => {
      albumPromises.push(
        createAlbum(knex, {
          album_title: album,
          album_type: 'Studio',
          band_id: bandId[0]
        })
      )
    });
    
    if (band.importantEPs.length) {
      band.importantEPs.forEach((album) => {
        albumPromises.push(
          createAlbum(knex, {
            album_title: album,
            album_type: 'EP',
            band_id: bandId[0]
          })
        )
      })
    }

    if (band.liveAlbums.length) {
      band.liveAlbums.forEach((album) => {
        albumPromises.push(
          createAlbum(knex, {
            album_title: album,
            album_type: 'Live',
            band_id: bandId[0]
          })
        )
      })
    }

    if (band.bestCompilation !== null) {
      albumPromises.push(
        createAlbum(knex, {
          album_title: band.bestCompilation,
          album_type: 'Compilation',
          band_id: bandId[0]
        })
      )
    }

    return Promise.all(albumPromises);
  })
};

const createAlbum = (knex, album) => {
  return knex('albums').insert(album);
};

exports.seed = (knex, Promise) => {
  return knex('albums').del()
    .then(() => knex('ebm_bands').del())
    .then(() => {
      let bandPromises = [];

      ebmBands.forEach((band) => {
        bandPromises.push(createBand(knex, band));
      });

      return Promise.all(bandPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
