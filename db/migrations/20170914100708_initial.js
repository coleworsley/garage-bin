
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('garage', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.string('cleanliness');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('garage')
  ]);
};
