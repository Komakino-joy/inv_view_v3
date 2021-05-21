const knex = require('knex');

const knex_db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'chegg_inventory'
    },
    useNullAsDefault: true
  });

module.exports = knex_db;