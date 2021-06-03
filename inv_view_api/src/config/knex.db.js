const knex = require('knex');

const chg_knex_db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'chegg_inventory'
    },
    useNullAsDefault: true
  });

  const fsc_knex_db = knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'fulfillment_inventory'
    },
    useNullAsDefault: true
  });


module.exports = {
  chg_knex_db,
  fsc_knex_db
};