const express = require('express');
const path = require('path');

const cors = require('cors');
const helmet = require('helmet');

const fscDataRouter = require('./routes/data_fetching.routes');
const fscFileRouter = require('./routes/file_upload.routes');

const app = express();

global.__basedir = __dirname + "/..";

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

app.use('/fsc/data', fscDataRouter);
app.use('/fsc/excel', fscFileRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' , 'public', 'build', 'index.html'));
});

module.exports = app;