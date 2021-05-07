const express = require("express");
const router = express.Router();

const knex = require('knex');
const countDetails = require("../controllers/count_details/count_detail.controller")
const progressView = require("../controllers/progress_view/progress_view.controller")
const shrinkView = require("../controllers/shrink_data/shrink_data.controller")
const notPutawayController = require("../controllers/not_putaway/not_putaway.excel.controller");
const emptyActiveController = require("../controllers/empty_active_locations/empty_active.excel.controller");
const transInvController = require("../controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const countsController = require("../controllers/cycle_counts/cycle_counts.excel.controller");
const adjustmentsController = require("../controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const dailyOnHandController = require("../controllers/daily_on_hand/daily_on_hand.controller");

const db = knex({
  client: 'pg',
  connection: {
    host: '10.196.133.14',
    user: 'postgres',
    password: 'postgres',
    database: 'chegg_inventory'
  },
  useNullAsDefault: true
});

let routes = (app) => {

  //Handle duplicate entries
  router.get("/adjustment-duplicate-check", adjustmentsController.handleGetDuplicateAdjustments);
  router.delete("/adjustment-duplicate-delete", adjustmentsController.handleDeleteDuplicates);
  router.get("/cyclecount-duplicate-check", countsController.handleGetDuplicateCounts );
  router.delete("/cyclecount-duplicate-delete", countsController.handleDeleteDuplicates );

  //Handle get latest entry
  router.get("/adjustment-newest-record", adjustmentsController.handleGetLatestAdjustment);
  router.get("/cyclecount-newest-record", countsController.handleGetLatestCount );

  //Handle last uploaded times for reports GET
  router.get("/adjustment-last-update", adjustmentsController.handleGetLastUpdate);
  router.get("/cyclecount-last-update", countsController.handleGetLastUpdate );
  router.get("/not-putaway-last-update", notPutawayController.handleGetLastUpdate );
  router.get("/transtional-last-update", transInvController.handleGetLastUpdate );
  router.get("/empty-active-last-update", emptyActiveController.handleGetLastUpdate );

  //Handle last uploaded times for reports POST
  router.post("/adjustment-last-update-post", adjustmentsController.handlePostLastUpdate);
  router.post("/cyclecount-last-update-post", countsController.handlePostLastUpdate );
  router.post("/not-putaway-last-update-post", notPutawayController.handlePostLastUpdate );
  router.post("/transtional-last-update-post", transInvController.handlePostLastUpdate );
  router.post("/empty-active-last-update-post", emptyActiveController.handlePostLastUpdate );

  //Get on hand inventory Daily Entry 
  router.get("/daily-on-hand-by-day", dailyOnHandController.handleGetDailyOnHand);
  router.get("/daily-on-hand-max", dailyOnHandController.handleGetMaxDailyOnHand);

  //Update on hand inventory Daily Entry 
  router.post("/daily-on-hand-update", dailyOnHandController.insertNewDailyOnHand);
  router.delete("/delete-daily-on-hand", dailyOnHandController.deleteDailyOnHand);
  
  //Count detail data
  router.get("/counts-by-day", countDetails.handleGetCountsByDay);
  router.get("/counts-by-user", countDetails.handleGetCountsByUser);
  router.get("/counts-by-user-by-day", (req, res) => {countDetails.handleGetCountsByUserByDay(req, res, db)})
  //Shrink view data
  router.get("/on-hand-inventory-by-day", (req, res) => {shrinkView.handleGetDailyShrink(req,res,db)});
  router.get("/on-hand-inventory-by-week", (req, res) =>  {shrinkView.handleGetWeeklyShrink(req, res, db)});
  router.get("/on-hand-inventory-by-month", (req, res) => {shrinkView.handleGetMonthlyShrink(req, res, db)});
  router.get("/on-hand-inventory-by-year", (req, res) => {shrinkView.handleGetYearlyShrink(req, res, db)});
  //Progress view data
  router.get("/count-unique-locations-counted", progressView.handleGetUniqueLocationsCounted);
  router.get("/empty-locations-counted", progressView.handleGetEmptyCounted);
  router.get("/empty-locations-uncounted", progressView.handleGetEmptyNotCounted);
  router.get("/occupied-locations-counted", progressView.handleGetOccupiedCounted);
  router.get("/occupied-locations-uncounted", progressView.handleGetOccupiedNotCounted);
  router.get("/count-variances", progressView.handleGetCountVariances);
  router.get("/total-variance-sum", progressView.handleGetNeTotalVariance);
  router.get("/absolute-total-variance-sum", progressView.handleGetAbsTotalVariance);
  router.get("/total-expected-qty-sum", progressView.handleGetTotalExpectedQty);
  router.get("/damages", progressView.handleGetDamages);
  router.get("/pr", progressView.handleGetProblemResolve);
  router.get("/not-putaway-0-days-count", (req, res) => {progressView.handleGetNotPutawayZero(req, res, db)});
  router.get("/not-putaway-1-day-count", (req, res) => {progressView.handleGetNotPutawayOne(req, res, db)});
  router.get("/not-putaway-2-day-count", (req, res) => {progressView.handleGetNotPutawayTwo(req, res, db)});
  router.get("/not-putaway-3-day-count", (req, res) => {progressView.handleGetNotPutawayThree(req, res, db)});
  router.get("/not-putaway-4-day-count", (req, res) => {progressView.handleGetNotPutawayFour(req, res, db)});
  router.get("/not-putaway-5-day-count", (req, res) => {progressView.handleGetNotPutawayFive(req, res, db)});
  router.get("/not-putaway-6-day-count", (req, res) => {progressView.handleGetNotPutawaySix(req, res, db)});
  router.get("/not-putaway-7-day-count", (req, res) => {progressView.handleGetNotPutawaySeven(req, res, db)});
  router.get("/not-putaway-over-7-days-count", (req, res) => {progressView.handleGetNotPutawayOverSeven(req, res, db)});
  router.get("/transitional-inv-0-days-count", (req, res) => {progressView.handleGetTransitionalZero(req, res, db)});
  router.get("/transitional-inv-1-day-count", (req, res) => {progressView.handleGetTransitionalOne(req, res, db)});
  router.get("/transitional-inv-2-day-count", (req, res) => {progressView.handleGetTransitionalTwo(req, res, db)});
  router.get("/transitional-inv-3-day-count", (req, res) => {progressView.handleGetTransitionalThree(req, res, db)});
  router.get("/transitional-inv-4-day-count", (req, res) => {progressView.handleGetTransitionalFour(req, res, db)});
  router.get("/transitional-inv-5-day-count", (req, res) => {progressView.handleGetTransitionalFive(req, res, db)});
  router.get("/transitional-inv-6-day-count", (req, res) => {progressView.handleGetTransitionalSix(req, res, db)});
  router.get("/transitional-inv-7-day-count", (req, res) => {progressView.handleGetTransitionalSeven(req, res, db)});
  router.get("/transitional-inv-over-7-days-count", (req, res) => {progressView.handleGetTransitionalOverSeven(req, res, db)});
  router.get("/transitional-inv-total-count", progressView.handleGetTransitionalTotal);
  router.get("/latest-count-data", (req, res) => {progressView.handleGetLatestCountData(req, res, db)});
  

  app.use("/chg/data", router);
};

module.exports = routes;