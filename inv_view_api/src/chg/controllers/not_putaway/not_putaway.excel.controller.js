const db = require("../../models");
const sequelize = require('../../models/index');
const NotPutaway = db.not_putaway;

const readXlsxFile = require("read-excel-file/node");
const convertToDate = require("../../../utils/serial_date_to_date")

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const uploadNotPutaway = async (req, res) => {

  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/temp/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      if (rows[0][0] == 'In Inventory Not Putaway'){
        // skip header and empty cells
        rows.shift();
        rows.shift();

        //Boolean to determine if last row will be removed
        removeLastRow = true;

        //Set the cell position based on the report type. 
        cellPos = {
          asn : 1, lpn_status : 2, lpn : 3, pallet : 4,
          item_name : 6, serial_number : 7, description : 8, created_dttm : 10,
          created_src : 11, num_of_days_created : 12
        }
      } else if (rows[0][0] == 'ASN#'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          asn : 0, lpn_status : 1, lpn : 2, pallet : 3,
          item_name : 5, serial_number : 6, description : 7, created_dttm : 9,
          created_src : 10, num_of_days_created : 11
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the In Inventory Not Putaway Report`
        }));

        return;
      }

      let not_putaway = [];

      rows.forEach((row) => {
        
        let notPutaway = {
          asn: row[cellPos.asn],
          lpn_status: row[cellPos.lpn_status],
          lpn: row[cellPos.lpn],
          pallet: row[cellPos.pallet],
          item_name: row[cellPos.item_name],
          serial_number: row[cellPos.serial_number],
          description: row[cellPos.description],
          created_dttm: convertToDate.ExcelDateToJSDate(row[cellPos.created_dttm].toString().split('.')[0]),
          created_src: row[cellPos.created_src],
          num_of_days_created: row[cellPos.num_of_days_created]
        };

        not_putaway.push(notPutaway);
      });

        //Truncate table before adding new data
        NotPutaway.destroy({ truncate : true, cascade: false })

        //Exclude empty cells from upload if removeLastRow is true.
        removeLastRow ? NotPutaway.bulkCreate(not_putaway.slice(0,-1)) 

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
        
        : NotPutaway.bulkCreate(not_putaway)
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
      WHERE type = 'notPutaway';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type= 'notPutaway';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};

module.exports = {
  uploadNotPutaway,
  handleGetLastUpdate,
  handlePostLastUpdate
};