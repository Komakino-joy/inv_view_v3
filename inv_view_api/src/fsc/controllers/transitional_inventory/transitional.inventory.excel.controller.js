const db = require("../../models");
const sequelize = require('../../models/index');
const TransitionalInventory = db.transitional_inventory;

const readXlsxFile = require("read-excel-file/node");
const convertToDate = require("../../../utils/serial_date_to_date")

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const uploadTranstionalInventory = async (req, res) => {

  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/temp/uploads/"  + req.file.filename;

    readXlsxFile(fs.createReadStream(path)).then((rows) => {
      if (rows[0][0] === 'Inventory in Transitional Bucket Report'){
        return;
      } else if (rows[0][0] === 'Customer'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          customer: 0, 
          article: 1, 
          on_hand_qty: 3, 
          created_dttm : 4
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the Inventory in Transitional Bucket Report (excel data)`
        }))
        

        return;
      }

      let transitional_inventory = [];

      rows.forEach((row) => {
        
        let transitionalInventory = {
          // Normalize to handle the accents in customer name.
          customer: row[cellPos.customer].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          article: row[cellPos.article],
          on_hand_qty: row[cellPos.on_hand_qty],
          created_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.created_dttm]),
        };

        transitional_inventory.push(transitionalInventory);
      });

        //Truncate table before adding new data
        TransitionalInventory.destroy({ truncate : true, cascade: false })

        //Exclude empty cells from upload if removeLastRow is true.
        removeLastRow ? TransitionalInventory.bulkCreate(transitional_inventory.slice(0,-1)) 

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
        
        : TransitionalInventory.bulkCreate(transitional_inventory)
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
    .catch(err => res.status(400).json({  error: 'Please make sure to upload the "excel data" format.'} ));

  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const handleGetLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      SELECT last_updated_dttm
      FROM update_history
      WHERE type = 'transitional';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type= 'transitional';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};

module.exports = {
  uploadTranstionalInventory,
  handlePostLastUpdate,
  handleGetLastUpdate
};