const db = require("../../models");
const sequelize = require('../../models/index');
const Adjustments = db.adjustment_data;

const readXlsxFile = require("read-excel-file/node");
const convertToDate = require("../../../utils/serial_date_to_date")

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const uploadAdjustments = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/temp/uploads/" + req.file.filename;
    
    readXlsxFile(path).then((rows) => {

      if (rows[0][0] === 'Inventory Adjustment'){
        return;
      } else if (rows[0][0] === 'Customer'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          customer: 0,
          sku: 1,
          unit_price: 2, 
          qty: 3, 
          user_id: 5,
          date_time: 6
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the Inventory Adjustment Report (excel data)`
        }));

        return;
      }

      let adjustment_data = [];

      rows.forEach((row) => {
        
        let adjustments = {
          customer: row[cellPos.customer].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          sku: row[cellPos.sku],
          unit_price: row[cellPos.unit_price],
          qty: row[cellPos.qty],
          user_id : row[cellPos.user_id],
          date_time: convertToDate.ExcelDateToJSDate(row[cellPos.date_time])
        };

        adjustment_data.push(adjustments);
      });
        //Exclude empty cells from upload if removeLastRow is true.
        removeLastRow ? Adjustments.bulkCreate(adjustment_data.slice(0,-1)) 

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
        
        : Adjustments.bulkCreate(adjustment_data)
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
    .catch(err => res.status(400).json(console.log(err)));
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const handleGetDuplicateAdjustments = (req, res) => {
  sequelize.sequelize.query(`
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
      adjustment_data.ilpn, 
      adjustment_data.serial_number, 
      adjustment_data.tran_number, 
      adjustment_data.sku, 
      adjustment_data.date_time
      );
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send("Something went wrong"));
};

module.exports = {
  uploadAdjustments,
  handleGetDuplicateAdjustments,
  handleGetLatestAdjustment,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates
};