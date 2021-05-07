const db = require("../../models");
const sequelize = require('../../models/index');
const Counts = db.counts;

const readXlsxFile = require("read-excel-file/node");

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const convertToDate = require("../../../utils/serial_date_to_date")

const uploadCounts = async (req, res) => {

  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/temp/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {

      if (rows[0][0] === 'Cycle Count Report'){
        return;
      } else if (rows[0][0] === 'Type'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          task : 1,
          location : 2, 
          loc_type : 4, 
          item : 10, 
          expected_qty : 12,
          expected_cost : 13, 
          counted_qty : 14, 
          counted_cost : 15, 
          variance_qty : 16, 
          variance_cost : 17, 
          counted_dttm : 23, 
          counted_by : 24, 
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file ${req.file.originalname}, please ensure you are uploading the Cycle Count Report (New) (excel data)`
        }));

        return;
      }

      let counts = [];
      rows.forEach((row) => {
        
        let cycleCounts = {
          task: row[cellPos.task],
          location: row[cellPos.location],
          loc_type: row[cellPos.loc_type],
          item: row[cellPos.item],
          expected_qty: row[cellPos.expected_qty],
          expected_cost: row[cellPos.expected_cost],
          counted_qty: row[cellPos.counted_qty],
          counted_cost: row[cellPos.counted_cost],
          variance_qty: row[cellPos.variance_qty],
          variance_cost: row[cellPos.variance_cost],
          counted_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.counted_dttm]),
          counted_by: row[cellPos.counted_by],
        };

        counts.push(cycleCounts);
      });
        //Exclude empty cells from upload if removeLastRow is true.
        removeLastRow ? Counts.bulkCreate(counts.slice(0,-1)) 

        //Delete the file from temp folder afeter data has been updated.
        .then(() => {unlinkAsync(req.file.path)})
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        })
        
        : Counts.bulkCreate(counts)
        //Delete the file from temp folder afeter data has been updated.
        .then(() => {unlinkAsync(req.file.path)})
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    })
    .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const handleGetDuplicateCounts = (req, res) => {
  sequelize.sequelize.query(`
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
.then(results => res.status(200).send(results[1].rows[0].count))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'count';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetLatestCount= (req, res) => {
  sequelize.sequelize.query(`
    SELECT MAX (counted_dttm) FROM counts;
    `)
.then(results => res.status(200).send(results[1].rows[0].max))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type='count';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleDeleteDuplicates= (req, res) => {
  sequelize.sequelize.query(`
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
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send(error));
};

module.exports = {
  uploadCounts,
  handleGetDuplicateCounts,
  handleGetLatestCount,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates
};