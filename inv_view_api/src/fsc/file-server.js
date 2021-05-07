const express = require("express");
const app = express();
const cors = require("cors");
const fileUploadRoutes = require("./routes/file_upload.routes");


global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use(cors())

fileUploadRoutes(app);

let port = 5053;
app.listen(port, '0.0.0.0', () => {
});


// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });