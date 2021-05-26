const sequelize = require('../../models/index');

const handleGetDuplicateAdjustments = (req, res) => {
  sequelize.sequelize.query(`
  SELECT 
	COUNT(a.*) 
    FROM (
      SELECT
        adjustment_data.user_id, 
        adjustment_data.qty, 
        adjustment_data.sku, 
        adjustment_data.customer, 
        adjustment_data.date_time, 
        COUNT(*)
      FROM adjustment_data
      GROUP BY
        adjustment_data.user_id, 
        adjustment_data.qty, 
        adjustment_data.sku, 
        adjustment_data.customer, 
        adjustment_data.date_time
      HAVING COUNT (*) > 1) a; 
    `)
.then(results => res.status(200).send(results[1].rows[0].count))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'adjustment';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetLatestAdjustment= (req, res) => {
  sequelize.sequelize.query(`
      SELECT MAX(date_time) FROM adjustment_data;
    `)
.then(results => res.status(200).send(results[1].rows[0].max))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type='adjustment';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleDeleteDuplicates= (req, res) => {
  sequelize.sequelize.query(`
    DELETE 
    FROM adjustment_data
    WHERE adjustment_data.id NOT IN (SELECT 
    MAX(ID)
    FROM adjustment_data 
    GROUP BY
      adjustment_data.user_id, 
      adjustment_data.qty, 
      adjustment_data.sku, 
      adjustment_data.customer, 
      adjustment_data.date_time
    );
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send("Something went wrong"));
};

module.exports = {
  handleGetDuplicateAdjustments,
  handleGetLatestAdjustment,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates
};