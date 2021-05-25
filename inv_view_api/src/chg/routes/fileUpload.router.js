const express = require("express");
const notPutawayController = require("../controllers/not_putaway/not_putaway.excel.controller");
const emptyActiveController = require("../controllers/empty_active_locations/empty_active.excel.controller");
const transInvController = require("../controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const countsController = require("../controllers/cycle_counts/cycle_counts.excel.controller");
const adjustmentsController = require("../controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const upload = require("../../middlewares/upload");

const controller =require('../controllers/cycle_counts/main.controller');

  const chgFileRouter = express.Router();

  // //Handle file uploads
  // chgFileRouter.post("/upload-not-putaway", upload, notPutawayController.uploadNotPutaway);
  // chgFileRouter.post("/upload-empty-active-locations", upload, emptyActiveController.uploadEmptyActiveLocations);
  // chgFileRouter.post("/upload-transitional-inventory", upload, transInvController.uploadTranstionalInventory);
  // chgFileRouter.post("/upload-counts", upload, countsController.uploadCounts);
  chgFileRouter.post("/upload-counts", controller.processExcel);
  // chgFileRouter.post("/upload-adjustments", upload, adjustmentsController.uploadAdjustments);

module.exports = chgFileRouter;