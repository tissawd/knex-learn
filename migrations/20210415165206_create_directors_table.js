
exports.up = function(knex) {
  return knex.schema.createTable('directors', table => {
    table.increments('id').primary();
    table.string('first_name', 50);
    table.string('last_name', 100);
  }).alterTable('movies', table => {
    table.integer('director_id');
    table.foreign('director_id').references('directors.id');
  })
  
};

exports.down = function(knex) {
return knex.schema.table('movies', table => {
    table.dropColumn('director_id');
  })
  .dropTableIfExists('directors');

};
