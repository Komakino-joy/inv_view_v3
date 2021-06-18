const knex = require('knex');

const chg_knex_db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DEDICATED_CLIENT_DATABASE_URL,
  },
    useNullAsDefault: true
  });

  const fsc_knex_db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.MULTI_CLIENT_DATABASE_URL,
    },
    useNullAsDefault: true
  });

module.exports = {
  chg_knex_db,
  fsc_knex_db
};
