
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Cobra Garna', price: 29992299 },
        { name: 'LynN Garna', price: 74 }
      ]);
    });
};
