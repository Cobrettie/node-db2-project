
exports.up = function(knex) {
  return knex.schema.createTable('bears', table => {
    table.increments();
    table.text('name', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bears');
};
