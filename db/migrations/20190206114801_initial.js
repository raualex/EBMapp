
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ebm-bands', function(table) {
      table.increments('id').primary();
      table.string('bandName');
      table.string('currentMembers');
      table.string('pastMembers');
      table.boolean('stillActive');
      table.string('countryOfOrigin');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('albums', function(table) {
      table.increments('id').primary();
      table.string('albumTitle');
      
    })
  ])
};

exports.down = function(knex, Promise) {
  
};
