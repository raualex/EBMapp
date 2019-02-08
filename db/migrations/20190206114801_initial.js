
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ebm_bands', function(table) {
      table.increments('id').primary();
      table.string('band_name');
      table.string('current_members');
      table.string('past_members');
      table.boolean('still_active');
      table.string('country_of_origin');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('albums', function(table) {
      table.increments('id').primary();
      table.string('album_title');
      table.string('album_type');
      table.integer('band_id').unsigned()
      table.foreign('band_id')
        .references('ebm_bands.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('albums'),
    knex.schema.dropTable('ebm_bands')
  ]);
};
