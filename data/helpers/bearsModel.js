const db = require('../../../node-db1-project/data/dbConfig');

module.exports = {
  get
};

function get(id) {
  return db('bears').where('bears.id', id).first();
}