const express = require("express");
const CHG_excelProcessor = require('../utils/chg-excel-processor');
const FSC_excelProcessor = require('../utils/fsc-excel-processor');


  const chgFileRouter = express.Router();
  const fscFileRouter = express.Router();

  //*Handle file uploads
  chgFileRouter.post("/upload-not-putaway", CHG_excelProcessor.processExcel);
  chgFileRouter.post("/upload-empty-active-locations", CHG_excelProcessor.processExcel);
  chgFileRouter.post("/upload-transitional-inventory", CHG_excelProcessor.processExcel);
  chgFileRouter.post("/upload-counts", CHG_excelProcessor.processExcel);
  chgFileRouter.post("/upload-adjustments", CHG_excelProcessor.processExcel);

  fscFileRouter.post("/upload-not-putaway", FSC_excelProcessor.processExcel);
  fscFileRouter.post("/upload-empty-active-locations", FSC_excelProcessor.processExcel);
  fscFileRouter.post("/upload-transitional-inventory", FSC_excelProcessor.processExcel);
  fscFileRouter.post("/upload-counts", FSC_excelProcessor.processExcel);
  fscFileRouter.post("/upload-adjustments", FSC_excelProcessor.processExcel);

module.exports = {
  chgFileRouter, 
  fscFileRouter
};