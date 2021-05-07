const express = require("express");
const router = express.Router();
const notPutawayController = require("../controllers/not_putaway/not_putaway.excel.controller");
const emptyActiveController = require("../controllers/empty_active_locations/empty_active.excel.controller");
const transInvController = require("../controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const countsController = require("../controllers/cycle_counts/cycle_counts.excel.controller");
const adjustmentsController = require("../controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const upload = require("../../middlewares/upload");

let routes = (app) => {

  //Handle file uploads
  router.post("/upload-not-putaway", upload, notPutawayController.uploadNotPutaway);
  router.post("/upload-empty-active-locations", upload, emptyActiveController.uploadEmptyActiveLocations);
  router.post("/upload-transitional-inventory", upload, transInvController.uploadTranstionalInventory);
  router.post("/upload-counts", upload, countsController.uploadCounts);
  router.post("/upload-adjustments", upload, adjustmentsController.uploadAdjustments);


  app.use("/chg/excel", router);

};

module.exports = routes;