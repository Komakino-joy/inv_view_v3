const express = require('express');
const path = require('path');

const cors = require('cors');
const helmet = require('helmet');

const {chgDataRouter, fscDataRouter} = require('./routes/data_fetching.routes');
const {chgFileRouter, fscFileRouter} = require('./routes/file_upload.routes');

const app = express();

app.use(cors());
app.use(helmet());

//preprocessor
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

app.use(express.static(path.join(__dirname, '..', '..', 'inv_view', 'build')));


app.use('/chg/data', chgDataRouter);
app.use('/chg/excel', chgFileRouter);

app.use('/fsc/data', fscDataRouter);
app.use('/fsc/excel', fscFileRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'inv_view', 'build', 'index.html'));
});

module.exports = app;