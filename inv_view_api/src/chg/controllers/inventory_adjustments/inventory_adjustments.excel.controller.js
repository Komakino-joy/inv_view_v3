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

      if (rows[0][0] == 'Inventory Adjustment'){
        // skip header and empty cells
        rows.shift();
        rows.shift();

        //Boolean to determine if last row will be removed
        removeLastRow = true;

        //Set the cell position based on the report type. 
        cellPos = {
          tran_code : 4, actn_code : 5, pix_description : 6, reason_code : 7, ilpn : 8, serial_number : 9,
          user_id : 11, first_name : 12, last_name : 13, tran_number : 14, qty : 15, sku : 16, date_time : 19
        }
      } else if (rows[0][0] == 'FC'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          tran_code : 3, actn_code : 4, pix_description : 5, reason_code : 6, ilpn : 7, serial_number : 8,
          user_id : 10, first_name : 11, last_name : 12, tran_number : 13, qty : 14, sku : 15, date_time : 18
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the Inventory Adjustment Report`
        }));

        return;
      }

      let adjustment_data = [];

      rows.forEach((row) => {
        
        let adjustments = {
          tran_code: row[cellPos.tran_code],
          actn_code: row[cellPos.actn_code],
          pix_description: row[cellPos.pix_description],
          reason_code: row[cellPos.reason_code],
          ilpn : row[cellPos.ilpn],
          serial_number : row[cellPos.serial_number],
          user_id: row[cellPos.user_id],
          first_name: row[cellPos.first_name],
          last_name: row[cellPos.last_name],
          tran_number : row[cellPos.tran_number],
          qty: row[cellPos.qty],
          sku: row[cellPos.sku],
          date_time: convertToDate.ExcelDateToJSDate(row[cellPos.date_time].toString().split('.')[0])
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
    });
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