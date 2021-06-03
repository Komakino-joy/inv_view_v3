const db = require('../../config/knex.db');

const handleGetDuplicateCounts = (req, res) => {
  db.raw(`
      SELECT 
      COUNT(a.*)
        FROM(
          SELECT
            counts.location, 
            counts.task, 
            counts.item, 
            DATE(counts.counted_dttm), 
        counts.counted_by,
            Count(*) AS "Count"
        FROM counts
        GROUP BY 
            counts.location, 
            counts.task, 
            counts.item, 
        counts.counted_by,
            counts.counted_dttm
        HAVING (((Count(*))>1))) a; 
    `)
.then(results => res.status(200).send(results.rows[0].count))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetLastUpdate= (req, res) => {
  db.raw(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'count';
    `)
.then(results => res.status(200).send(results.rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetLatestCount= (req, res) => {
  db.raw(`
    SELECT MAX (counted_dttm) FROM counts;
    `)
.then(results => res.status(200).send(results.rows[0].max))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handlePostLastUpdate= (req, res) => {
  db.raw(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type='count';
    `)
.then(results => res.status(200).send(results.command))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleDeleteDuplicates= (req, res) => {
  db.raw(`
    DELETE 
      FROM counts
      WHERE "id" 
    NOT IN (SELECT 
      MAX(ID)
      FROM counts
      GROUP BY
      counts.location,
      coalesce(counts.task,'a'),
      counts.item,
      counts.counted_by,
      counts.counted_dttm); 
    `)
.then(results => res.status(200).send(results.command))
.catch(error => res.status(400).send(error));
};

module.exports = {
  handleGetDuplicateCounts,
  handleGetLatestCount,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates
};