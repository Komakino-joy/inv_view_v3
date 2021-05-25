const express = require('express');
const path = require('path');

const cors = require('cors');
const helmet = require('helmet');

const chgDataRouter = require('./routes/data.router');
const chgFileRouter = require('./routes/fileUpload.router');

const app = express();

app.use(cors());
app.use(helmet());

//preprocessor
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

app.use('/chg/data', chgDataRouter);
app.use('/chg/excel', chgFileRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' , 'public', 'build', 'index.html'));
});

module.exports = app;