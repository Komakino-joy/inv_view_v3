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

      if (rows[0][0] == 'Cycle Count'){
        // skip header and empty cells
        rows.shift();
        rows.shift();

        //Boolean to determine if last row will be removed
        removeLastRow = true;

        //Set the cell position based on the report type. 
        cellPos = {
          location : 1, loc_type : 2, count_type : 3, count_description : 4, task : 5,
          lpn : 6, item : 7, item_description : 8, item_velocity : 9, expected_qty : 10,
          expected_cost : 11, counted_qty : 12, counted_cost : 13, variance_qty : 14, 
          variance_cost : 15, counted_dttm : 16, counted_by : 17, reason_code : 18, status : 19
        }
      } else if (rows[0][0] == 'Location'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          location : 0, loc_type : 1, count_type : 2, count_description : 3, task : 4,
          lpn : 5, item : 6, item_description : 7, item_velocity : 8, expected_qty : 9,
          expected_cost : 10, counted_qty : 11, counted_cost : 12, variance_qty : 13, 
          variance_cost : 14, counted_dttm : 15, counted_by : 16, reason_code : 17, status : 18
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file ${req.file.originalname}, please ensure you are uploading the Cycle Count Report`
        }));

        return;
      }

      let counts = [];
      rows.forEach((row) => {
        
        let cycleCounts = {
          location: row[cellPos.location],
          loc_type: row[cellPos.loc_type],
          count_type: row[cellPos.count_type],
          count_description: row[cellPos.count_description],
          task: row[cellPos.task],
          lpn: row[cellPos.lpn],
          item: row[cellPos.item],
          item_description: row[cellPos.item_description],
          item_velocity: row[cellPos.item_velocity],
          expected_qty: row[cellPos.expected_qty],
          expected_cost: row[cellPos.expected_cost],
          counted_qty: row[cellPos.counted_qty],
          counted_cost: row[cellPos.counted_cost],
          variance_qty: row[cellPos.variance_qty],
          variance_cost: row[cellPos.variance_cost],
          counted_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.counted_dttm].toString().split('.')[0]),
          counted_by: row[cellPos.counted_by],
          reason_code: row[cellPos.reason_code],
          status: row[cellPos.status]
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
    });
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