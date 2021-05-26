const express = require("express");
const excelProcessor = require('../utils/excel-processor');

  const fscFileRouter = express.Router();

  //*Handle file uploads
  fscFileRouter.post("/upload-not-putaway", excelProcessor.processExcel);
  fscFileRouter.post("/upload-empty-active-locations", excelProcessor.processExcel);
  fscFileRouter.post("/upload-transitional-inventory", excelProcessor.processExcel);
  fscFileRouter.post("/upload-counts", excelProcessor.processExcel);
  fscFileRouter.post("/upload-adjustments", excelProcessor.processExcel);

module.exports = fscFileRouter;