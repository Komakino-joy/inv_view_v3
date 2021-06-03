const db = require('../../config/knex.db');

const handleGetLastUpdate= (req, res) => {
  db.raw(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'emptyActive';
    `)
.then(results => res.status(200).send(results.rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handlePostLastUpdate= (req, res) => {
  db.raw(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type= 'emptyActive';
    `)
.then(results => res.status(200).send(results.command))
.catch(error => res.status(400).send('Something went wrong.'));
};


module.exports = {
  handleGetLastUpdate,
  handlePostLastUpdate
};