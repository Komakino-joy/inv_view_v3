const { chg_knex_db } = require('../../../config/knex.db');

const handleGetDuplicateAdjustments = (req, res) => {
  chg_knex_db.raw(`
    SELECT 
      COUNT(a.*) 
    FROM (
      SELECT
        adjustment_data.ilpn, 
        adjustment_data.serial_number, 
        adjustment_data.tran_number, 
        adjustment_data.sku, 
        adjustment_data.date_time, 
        COUNT(*)
      FROM adjustment_data
      GROUP BY
        adjustment_data.ilpn, 
        adjustment_data.serial_number, 
        adjustment_data.tran_number, 
        adjustment_data.sku, 
        adjustment_data.date_time
      HAVING COUNT (*) > 1) a; 
    `)
.then(results => res.status(200).send(results.rows[0].count))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetLastUpdate= (req, res) => {
  chg_knex_db.raw(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'adjustment';
    `)
.then(results => res.status(200).send(results.rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetLatestAdjustment= (req, res) => {
  chg_knex_db.raw(`
      SELECT MAX(date_time) FROM adjustment_data;
    `)
.then(results => res.status(200).send(results.rows[0].max))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handlePostLastUpdate= (req, res) => {
  chg_knex_db.raw(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type='adjustment';
    `)
.then(results => res.status(200).send(results.command))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleDeleteDuplicates= (req, res) => {
  chg_knex_db.raw(`
      DELETE 
      FROM adjustment_data
      WHERE adjustment_data.id NOT IN (SELECT 
      MAX(ID)
      FROM adjustment_data 
      GROUP BY
      adjustment_data.ilpn, 
      adjustment_data.serial_number, 
      adjustment_data.tran_number, 
      adjustment_data.sku, 
      adjustment_data.date_time
      );
    `)
.then(results => res.status(200).send(results.command))
.catch(error => res.status(400).send("Something went wrong"));
};

module.exports = {
  handleGetDuplicateAdjustments,
  handleGetLatestAdjustment,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates
};