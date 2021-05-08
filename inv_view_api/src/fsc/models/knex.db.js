const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'fulfillment_inventory'
    },
    useNullAsDefault: true
  });

module.exports = db;