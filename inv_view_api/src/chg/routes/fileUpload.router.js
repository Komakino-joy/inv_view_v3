const express = require("express");
const excelProcessor = require('../utils/excel-processor');

  const chgFileRouter = express.Router();

  //*Handle file uploads
  chgFileRouter.post("/upload-not-putaway", excelProcessor.processExcel);
  chgFileRouter.post("/upload-empty-active-locations", excelProcessor.processExcel);
  chgFileRouter.post("/upload-transitional-inventory", excelProcessor.processExcel);
  chgFileRouter.post("/upload-counts", excelProcessor.processExcel);
  chgFileRouter.post("/upload-adjustments", excelProcessor.processExcel);

module.exports = chgFileRouter;