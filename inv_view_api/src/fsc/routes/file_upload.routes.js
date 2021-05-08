const express = require("express");
const notPutawayController = require("../controllers/not_putaway/not_putaway.excel.controller");
const emptyActiveController = require("../controllers/empty_active_locations/empty_active.excel.controller");
const transInvController = require("../controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const countsController = require("../controllers/cycle_counts/cycle_counts.excel.controller");
const adjustmentsController = require("../controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const upload = require("../../middlewares/upload");

  const fscFileRouter = express.Router();

  //Handle file uploads
  fscFileRouter.post("/upload-not-putaway", upload, notPutawayController.uploadNotPutaway);
  fscFileRouter.post("/upload-empty-active-locations", upload, emptyActiveController.uploadEmptyActiveLocations);
  fscFileRouter.post("/upload-transitional-inventory", upload, transInvController.uploadTranstionalInventory);
  fscFileRouter.post("/upload-counts", upload, countsController.uploadCounts);
  fscFileRouter.post("/upload-adjustments", upload, adjustmentsController.uploadAdjustments);

module.exports = fscFileRouter;