
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
    table.increments();
    table.string('name').unique();
    table.integer('price').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
