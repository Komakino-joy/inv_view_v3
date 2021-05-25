const db = require("../../models");
const sequelize = require('../../models/index');
const Counts = db.counts;

const readXlsxFile = require("read-excel-file/node");

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const convertToDate = require("../../../utils/serial_date_to_date")

function getDestination(req, file, cb) {
  cb(null, '')
}



function MyCustomStorage(opts) {
  this.getDestination = (opts.destination || getDestination)
}

MyCustomStorage.prototype._handleFile = function _handleFile(req, file, cb) {
  // set input stream for xlsxWriter stream which will be used to downlaod excel
  req.xlsxWriter.setInputStream(
      // stream of input file
      file.stream
          // convert excel to object stream
          .pipe(excel())
          //process object stream and return formated object for xlsxWriter
          .pipe(getTransformObject())
  );
  cb(null, {
      path: '',
      size: 0
  })
}

MyCustomStorage.prototype._removeFile = function _removeFile(req, file, cb) {
  fsImpl.unlink(file.path, cb)
}

// module.exports = function (opts) {
//   return new MyCustomStorage(opts)
// }


// return transform stream which will do proccessing
function getTransformObject() {
  const jsonToDb = new Transform({
      writableObjectMode: true,
      readableObjectMode: true,
      transform(chunk, encoding, callback) {
          // to check current memory usage
          const used = process.memoryUsage().heapUsed / 1024 / 1024;
          // console.log('\033c');
          // console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
          // records is blank array decalred below 
          this.records.push(chunk);
          // batch processing of records
          if (this.records.length == 10) {
              saveDataToDB(this.records)
                  .then((data) => {
                      // data is modified data
                      let i = 0;
                      let counts = [];
                      data.forEach((record) => {


                      let cycleCounts = {
                          location: data[i]['Location'],
                          loc_type: data[i]['Loc Type'],
                          // count_type: data[i]['Count Type'],
                          // count_description: data[i]['Count Desctiption'],
                          // task: data[i]['Task'],
                          // lpn: data[i]['LPN'],
                          item: data[i]['Item'],
                          // item_description: data[i]['Item Description'],
                          // item_velocity: data[i]['Item Velocity'],
                          expected_qty: data[i]['Expected QTY'],
                          expected_cost: data[i]['Expected Cost'],
                          counted_qty: data[i]['Counted QTY'],
                          counted_cost: data[i]['Counted Cost'],
                          variance_qty: data[i]['Variance QTY'],
                          variance_cost: data[i]['Variance Cost'],
                          counted_dttm: convertToDate.ExcelDateToJSDate(data[i]['Counted Date/Time'].toString().split('.')[0]),
                          counted_by: data[i]['Counted By'],
                          reason_code: data[i]['Reason Code'],
                          status: data[i]['Status']
                          };
                  
                          counts.push(cycleCounts);
                          Counts.bulkCreate(counts)
                          this.push([...Object.values(record)])
                          i++
                      })
                      // reset records for batch processing
                      this.records = [];
                      callback();
                  })
          }
          else {
              callback();
          }
      },
      flush(done) {
          // flush we repeat steps for last records,
          // eg total records 108, last 8 records are left to process
          if (this.records.length > 0) {
              saveDataToDB(this.records)
                  .then((data) => {
                    console.log(data.toString())
                      // data is modified data
                      let i = 0;
                      let counts = [];
                      data.forEach((record) => {


                      let cycleCounts = {
                          location: data[i]['Location'],
                          loc_type: data[i]['Loc Type'],
                          // count_type: data[i]['Count Type'],
                          // count_description: data[i]['Count Desctiption'],
                          // task: data[i]['Task'],
                          // lpn: data[i]['LPN'],
                          item: data[i]['Item'],
                          // item_description: data[i]['Item Description'],
                          // item_velocity: data[i]['Item Velocity'],
                          expected_qty: data[i]['Expected QTY'],
                          expected_cost: data[i]['Expected Cost'],
                          counted_qty: data[i]['Counted QTY'],
                          counted_cost: data[i]['Counted Cost'],
                          variance_qty: data[i]['Variance QTY'],
                          variance_cost: data[i]['Variance Cost'],
                          counted_dttm: convertToDate.ExcelDateToJSDate(data[i]['Counted Date/Time'].toString().split('.')[0]),
                          counted_by: data[i]['Counted By'],
                          reason_code: data[i]['Reason Code'],
                          status: data[i]['Status']
                          };
                  
                          counts.push(cycleCounts);
                          Counts.bulkCreate(counts)
                          this.push([...Object.values(record)])
                          i++
                      })
                      this.records = [];
                      console.log('done processing')
                      done();
                  })
          } else {
              console.log('done processing')
              done();
          }
      }
  });
  jsonToDb.records = [];
  return jsonToDb;
}

// async function to process data
function saveDataToDB(array) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // here data can be modified 
          resolve(array.map(e => ({ ...e, id: Math.floor((Math.random() * 10) + 1) })))
      }, 10)
  })
}
//         .then(() => {
//           res.status(200).send({
//             message: "Uploaded the file successfully: " + req.file.originalname,
//           });
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "Fail to import data into database!",
//             error: error.message,
//           });
//         })
        
        // : Counts.bulkCreate(counts)
//         //Delete the file from temp folder afeter data has been updated.
//         .then(() => {unlinkAsync(req.file.path)})
//         .then(() => {
//           res.status(200).send({
//             message: "Uploaded the file successfully: " + req.file.originalname,
//           });
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "Fail to import data into database!",
//             error: error.message,
//           });
//         });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// };

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
  // uploadCounts,
  handleGetDuplicateCounts,
  handleGetLatestCount,
  handlePostLastUpdate,
  handleGetLastUpdate,
  handleDeleteDuplicates,
  function (opts) {
    return new MyCustomStorage(opts)
  }
  
};