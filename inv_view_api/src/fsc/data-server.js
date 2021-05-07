const express = require("express");
const app = express();
const cors = require("cors");
const dataFetchingRoutes = require("./routes/data_fetching.routes")

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use(cors())

dataFetchingRoutes(app);


let port = 5054;
app.listen(port, '0.0.0.0', () => {
});
