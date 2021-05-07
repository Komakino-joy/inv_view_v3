const db = require("../../models");
const sequelize = require('../../models/index');
const EmptyActiveLocations = db.empty_active_locations;

const readXlsxFile = require("read-excel-file/node");

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const uploadEmptyActiveLocations = async (req, res) => {

  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/temp/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {

      if (rows[0][0] == 'Empty Active Location'){
        // skip header and empty cells
        rows.shift();
        rows.shift();

        //Boolean to determine if last row will be removed
        removeLastRow = true;

        //Set the cell position based on the report type. 
        cellPos = {
          pick_zone : 1, display_location : 7
        }
      } else if (rows[0][0] == 'Pick Zone'){
        rows.shift();

        removeLastRow = false;

        cellPos = {
          pick_zone : 0, display_location : 6
        }
      } else {
        unlinkAsync(req.file.path)
        .then(
          res.status(500).send({
            message: `Could not upload the file ${req.file.originalname}, please ensure you are uploading the Empty Active Location Report`
        }));

        return;
      }

      let empty_active_locations = [];
      rows.forEach((row) => {
        
        let EmptyActiveLocations = {
          pick_zone: row[cellPos.pick_zone],
          display_location: row[cellPos.display_location]
        };

        empty_active_locations.push(EmptyActiveLocations);
      });

        //Truncate table before adding new data
        EmptyActiveLocations.destroy({ truncate : true, cascade: false })

        //Exclude empty cells from upload if removeLastRow is true.
        removeLastRow ? EmptyActiveLocations.bulkCreate(empty_active_locations.slice(0,-1)) 

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
        
        : EmptyActiveLocations.bulkCreate(empty_active_locations)
        
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
      WHERE type = 'emptyActive';
    `)
.then(results => res.status(200).send(results[1].rows[0].last_updated_dttm))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handlePostLastUpdate= (req, res) => {
  sequelize.sequelize.query(`
      UPDATE update_history SET last_updated_dttm = NOW() WHERE type= 'emptyActive';
    `)
.then(results => res.status(200).send(results[1].command))
.catch(error => res.status(400).send('Something went wrong.'));
};


module.exports = {
  uploadEmptyActiveLocations,
  handleGetLastUpdate,
  handlePostLastUpdate
};