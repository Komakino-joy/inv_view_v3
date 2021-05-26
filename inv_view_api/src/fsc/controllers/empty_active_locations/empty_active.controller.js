const sequelize = require('../../models/index');

const handleGetLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'emptyActive';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type= 'emptyActive';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};


module.exports = {
  handleGetLastUpdate,
  handlePostLastUpdate
};