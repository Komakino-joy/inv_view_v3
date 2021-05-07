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

    let path = __basedir  + "/temp/uploads/"  + req.file.filename;

    readXlsxFile(path).then((rows) => {
      if (rows[0][0] == 'Transitional Inventory'){
        // skip header and empty cells
        rows.shift();
        rows.shift();

        //Boolean to determine if last row will be removed
        removeLastRow = true;

        //Set the cell position based on the report type. 
        cellPos = {
          on_hand_qty : 3, article : 4, article_description : 5, 
          created_dttm : 7, last_updated_dttm : 8
        }
      } else if (rows[0][1] == 'Trans Invn Type'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          on_hand_qty : 2, article : 3, article_description : 4, 
          created_dttm : 6, last_updated_dttm : 7
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the Transitional Inventory Report`
        }));

        return;
      }

      let transitional_inventory = [];

      rows.forEach((row) => {
        
        let transitionalInventory = {
          on_hand_qty: row[cellPos.on_hand_qty],
          article: row[cellPos.article],
          article_description: row[cellPos.article_description],
          created_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.created_dttm]),
          last_updated_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.last_updated_dttm].toString().split('.')[0]),
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
    });

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