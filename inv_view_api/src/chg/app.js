const express = require('express');
const path = require('path');

const cors = require('cors');
const helmet = require('helmet');

const chgDataRouter = require('./routes/data.router');
const chgFileRouter = require('./routes/fileUpload.router');

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

app.use('/chg/data', chgDataRouter);
app.use('/chg/excel', chgFileRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' , 'public', 'build', 'index.html'));
});

module.exports = app;