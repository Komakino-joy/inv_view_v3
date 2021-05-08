const express = require("express");

const countDetails = require("../controllers/count_details/count_detail.controller")
const progressView = require("../controllers/progress_view/progress_view.controller")
const shrinkView = require("../controllers/shrink_data/shrink_data.controller")
const notPutawayController = require("../controllers/not_putaway/not_putaway.excel.controller");
const emptyActiveController = require("../controllers/empty_active_locations/empty_active.excel.controller");
const transInvController = require("../controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const countsController = require("../controllers/cycle_counts/cycle_counts.excel.controller");
const adjustmentsController = require("../controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const dailyOnHandController = require("../controllers/daily_on_hand/daily_on_hand.controller");


const chgDataRouter = express.Router();

//Handle duplicate entries
chgDataRouter.get("/adjustment-duplicate-check", adjustmentsController.handleGetDuplicateAdjustments);
chgDataRouter.delete("/adjustment-duplicate-delete", adjustmentsController.handleDeleteDuplicates);
chgDataRouter.get("/cyclecount-duplicate-check", countsController.handleGetDuplicateCounts );
chgDataRouter.delete("/cyclecount-duplicate-delete", countsController.handleDeleteDuplicates );

//Handle get latest entry
chgDataRouter.get("/adjustment-newest-record", adjustmentsController.handleGetLatestAdjustment);
chgDataRouter.get("/cyclecount-newest-record", countsController.handleGetLatestCount );

//Handle last uploaded times for reports GET
chgDataRouter.get("/adjustment-last-update", adjustmentsController.handleGetLastUpdate);
chgDataRouter.get("/cyclecount-last-update", countsController.handleGetLastUpdate );
chgDataRouter.get("/not-putaway-last-update", notPutawayController.handleGetLastUpdate );
chgDataRouter.get("/transtional-last-update", transInvController.handleGetLastUpdate );
chgDataRouter.get("/empty-active-last-update", emptyActiveController.handleGetLastUpdate );

//Handle last uploaded times for reports POST
chgDataRouter.post("/adjustment-last-update-post", adjustmentsController.handlePostLastUpdate);
chgDataRouter.post("/cyclecount-last-update-post", countsController.handlePostLastUpdate );
chgDataRouter.post("/not-putaway-last-update-post", notPutawayController.handlePostLastUpdate );
chgDataRouter.post("/transtional-last-update-post", transInvController.handlePostLastUpdate );
chgDataRouter.post("/empty-active-last-update-post", emptyActiveController.handlePostLastUpdate );

//Get on hand inventory Daily Entry 
chgDataRouter.get("/daily-on-hand-by-day", dailyOnHandController.handleGetDailyOnHand);
chgDataRouter.get("/daily-on-hand-max", dailyOnHandController.handleGetMaxDailyOnHand);

//Update on hand inventory Daily Entry 
chgDataRouter.post("/daily-on-hand-update", dailyOnHandController.insertNewDailyOnHand);
chgDataRouter.delete("/delete-daily-on-hand", dailyOnHandController.deleteDailyOnHand);

//Count detail data
chgDataRouter.get("/counts-by-day", countDetails.handleGetCountsByDay);
chgDataRouter.get("/counts-by-user", countDetails.handleGetCountsByUser);
chgDataRouter.get("/counts-by-user-by-day", (req, res) => {countDetails.handleGetCountsByUserByDay(req, res, db)})
//Shrink view data
chgDataRouter.get("/on-hand-inventory-by-day", (req, res) => {shrinkView.handleGetDailyShrink(req,res,db)});
chgDataRouter.get("/on-hand-inventory-by-week", (req, res) =>  {shrinkView.handleGetWeeklyShrink(req, res, db)});
chgDataRouter.get("/on-hand-inventory-by-month", (req, res) => {shrinkView.handleGetMonthlyShrink(req, res, db)});
chgDataRouter.get("/on-hand-inventory-by-year", (req, res) => {shrinkView.handleGetYearlyShrink(req, res, db)});
//Progress view data
chgDataRouter.get("/count-unique-locations-counted", progressView.handleGetUniqueLocationsCounted);
chgDataRouter.get("/empty-locations-counted", progressView.handleGetEmptyCounted);
chgDataRouter.get("/empty-locations-uncounted", progressView.handleGetEmptyNotCounted);
chgDataRouter.get("/occupied-locations-counted", progressView.handleGetOccupiedCounted);
chgDataRouter.get("/occupied-locations-uncounted", progressView.handleGetOccupiedNotCounted);
chgDataRouter.get("/count-variances", progressView.handleGetCountVariances);
chgDataRouter.get("/total-variance-sum", progressView.handleGetNeTotalVariance);
chgDataRouter.get("/absolute-total-variance-sum", progressView.handleGetAbsTotalVariance);
chgDataRouter.get("/total-expected-qty-sum", progressView.handleGetTotalExpectedQty);
chgDataRouter.get("/damages", progressView.handleGetDamages);
chgDataRouter.get("/pr", progressView.handleGetProblemResolve);
chgDataRouter.get("/not-putaway-0-days-count", (req, res) => {progressView.handleGetNotPutawayZero(req, res, db)});
chgDataRouter.get("/not-putaway-1-day-count", (req, res) => {progressView.handleGetNotPutawayOne(req, res, db)});
chgDataRouter.get("/not-putaway-2-day-count", (req, res) => {progressView.handleGetNotPutawayTwo(req, res, db)});
chgDataRouter.get("/not-putaway-3-day-count", (req, res) => {progressView.handleGetNotPutawayThree(req, res, db)});
chgDataRouter.get("/not-putaway-4-day-count", (req, res) => {progressView.handleGetNotPutawayFour(req, res, db)});
chgDataRouter.get("/not-putaway-5-day-count", (req, res) => {progressView.handleGetNotPutawayFive(req, res, db)});
chgDataRouter.get("/not-putaway-6-day-count", (req, res) => {progressView.handleGetNotPutawaySix(req, res, db)});
chgDataRouter.get("/not-putaway-7-day-count", (req, res) => {progressView.handleGetNotPutawaySeven(req, res, db)});
chgDataRouter.get("/not-putaway-over-7-days-count", (req, res) => {progressView.handleGetNotPutawayOverSeven(req, res, db)});
chgDataRouter.get("/transitional-inv-0-days-count", (req, res) => {progressView.handleGetTransitionalZero(req, res, db)});
chgDataRouter.get("/transitional-inv-1-day-count", (req, res) => {progressView.handleGetTransitionalOne(req, res, db)});
chgDataRouter.get("/transitional-inv-2-day-count", (req, res) => {progressView.handleGetTransitionalTwo(req, res, db)});
chgDataRouter.get("/transitional-inv-3-day-count", (req, res) => {progressView.handleGetTransitionalThree(req, res, db)});
chgDataRouter.get("/transitional-inv-4-day-count", (req, res) => {progressView.handleGetTransitionalFour(req, res, db)});
chgDataRouter.get("/transitional-inv-5-day-count", (req, res) => {progressView.handleGetTransitionalFive(req, res, db)});
chgDataRouter.get("/transitional-inv-6-day-count", (req, res) => {progressView.handleGetTransitionalSix(req, res, db)});
chgDataRouter.get("/transitional-inv-7-day-count", (req, res) => {progressView.handleGetTransitionalSeven(req, res, db)});
chgDataRouter.get("/transitional-inv-over-7-days-count", (req, res) => {progressView.handleGetTransitionalOverSeven(req, res, db)});
chgDataRouter.get("/transitional-inv-total-count", progressView.handleGetTransitionalTotal);
chgDataRouter.get("/latest-count-data", (req, res) => {progressView.handleGetLatestCountData(req, res, db)});

module.exports = chgDataRouter;