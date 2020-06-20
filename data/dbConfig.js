// your dbConfig file basically gives you access to your database

const knex = require('knex');

const knexfile = require('../knexfile');

const database = 'development';

module.exports = knex(knexfile[database])