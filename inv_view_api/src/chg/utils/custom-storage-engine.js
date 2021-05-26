var excel = require('excel-stream')
const { Transform } = require('stream');
const { 
  cycleCountColumns,
  notPutawayColumns,
  emptyActiveColumns,
  invAdjustmentColumns,
  transitionalColumns,
  truncateTransitional,
  truncateNotPutaway,
  truncateEmptyActive,
  abortTruncate,
 } = require('../utils/seeder');

function getDestination(req, file, cb) {
  cb(null, '')
};

function MyCustomStorage(opts) {
  this.getDestination = (opts.destination || getDestination)
};

MyCustomStorage.prototype._handleFile = function _handleFile(req, file, cb,) {
  console.log(req.route.path)
  // Declare file variable
  let requestedColumns;
  let errorOut;

  // Set file variable based on route path, this will tell the transform function
  // Which function to run from the seeder.js file
  switch (req.route.path){
    case '/upload-counts':
      requestedColumns = cycleCountColumns;
      errorOut = '{"Cycle Count"';
      sliceBy = 14;
      truncate = abortTruncate
      break;
      
    case '/upload-not-putaway':
      requestedColumns = notPutawayColumns;
      errorOut = '{"Cycle Count"';
      sliceBy = 14;
      truncate = truncateNotPutaway
      break;

    case '/upload-empty-active-locations':
      requestedColumns = emptyActiveColumns;
      errorOut = '{"Cycle Count"';
      sliceBy = 14;
      truncate = truncateEmptyActive
      break;

    case '/upload-transitional-inventory':
      requestedColumns = transitionalColumns;
      errorOut = '{"Cycle Count"';
      sliceBy = 14;
      truncate = truncateTransitional
      break;

    case '/upload-adjustments':
      requestedColumns = invAdjustmentColumns;
      errorOut = '{"Cycle Count"';
      sliceBy = 14;
      truncate = abortTruncate
      break; 

    default:
      requestedColumns = undefined;
      break;
  };
  
  // set input stream for xlsxWriter stream which will be used to downlaod excel
  req.xlsxWriter.setInputStream(
    // stream of input file
    file.stream
    
    .pipe(excel().pipe(excel({enclosedChar:'"'})))

    //process object stream and return formated object for xlsxWriter
    .pipe(getTransformObject(requestedColumns, errorOut, sliceBy, truncate)) 
    
  );

  cb(null, {
      path: '',
      size: 0
  });
  

};

MyCustomStorage.prototype._removeFile = function _removeFile(req, file, cb) {
  fsImpl.unlink(file.path, cb);
};

module.exports = function (opts) {
  return new MyCustomStorage(opts);
};


// return transform stream which will do proccessing
function getTransformObject(requestedColumns, errorOut, sliceBy, truncate) {
  
  const jsonToDb = new Transform({
      writableObjectMode: true,
      readableObjectMode: true,
      transform(chunk, encoding, callback) {

        // records is blank array declared below 
        this.records.push(chunk);
        
        // batch processing of records
        if (this.records.length == 10) {
          
          saveDataToDB(this.records)
          
          .then((data) => {
            // console.log(data)
            let i = 0;
            // data is modified data
            data.forEach((record) => {
              this.push([...Object.values(record)]);
              requestedColumns(data, i);
              i++
            });

            // reset count array and records for bulk processing
            counts = []
            this.records = [];
            callback();
          })
          .catch(err => (console.log(err)));
          
        } else {
          callback();
        };
      },
      flush(done) {
        // flush we repeat steps for last records,
        // eg total records 108, last 8 records are left to process
        if (this.records.length > 0) {
          saveDataToDB(this.records)
          
          .then((data) => {
            // console.log(data)
            let i = 0;
            // data is modified data
            data.forEach((record) => {
            this.push([...Object.values(record)])
            requestedColumns(data, i);                  
            // Increment counter
            i++
          });    

            // reset count array and records for bulk processing
            counts = []
            this.records = [];
            console.log('done processing')
            done();
          })
          .catch(err => (console.log(err)))
        } else {
          console.log('done processing')
          done();
        };
      }
  })
  
  jsonToDb.records = [];

  truncate();

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
};