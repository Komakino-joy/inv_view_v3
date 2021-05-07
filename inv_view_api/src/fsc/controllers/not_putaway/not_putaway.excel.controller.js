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
      if (rows[0][0] === 'Aging Putaway Report'){
        return;
      } else if (rows[0][0] === 'COMPANY'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          company: 0, asn: 1, lpn_status: 5, lpn: 3,
          item_name: 6, created_dttm: 11,
          created_src: 12, num_of_days_created: 13
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file "${req.file.originalname}", please ensure you are uploading the Aging Putaway Report (excel data)`
        }));

        return;
      }

      let not_putaway = [];

      rows.forEach((row) => {
        
        let notPutaway = {
          // Normalize to handle the accents in customer name.
          company:row[cellPos.company].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          asn: row[cellPos.asn],
          lpn_status: row[cellPos.lpn_status],
          lpn: row[cellPos.lpn],
          item_name: row[cellPos.item_name],
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
    })
    // .catch(err => res.status(400).json({  error: 'Please make sure to upload the "excel data" format.'} ));
    .catch(err => console.log(err));
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