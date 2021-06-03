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
chgDataRouter.get("/transitional-last-update", transInvController.handleGetLastUpdate );
chgDataRouter.get("/empty-active-last-update", emptyActiveController.handleGetLastUpdate );

//Handle last uploaded times for reports POST
chgDataRouter.post("/adjustment-last-update-post", adjustmentsController.handlePostLastUpdate);
chgDataRouter.post("/cyclecount-last-update-post", countsController.handlePostLastUpdate );
chgDataRouter.post("/not-putaway-last-update-post", notPutawayController.handlePostLastUpdate );
chgDataRouter.post("/transitional-last-update-post", transInvController.handlePostLastUpdate );
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
chgDataRouter.get("/counts-by-user-by-day", countDetails.handleGetCountsByUserByDay)
//Shrink view data
chgDataRouter.get("/on-hand-inventory-by-day", shrinkView.handleGetDailyShrink);
chgDataRouter.get("/on-hand-inventory-by-week", shrinkView.handleGetWeeklyShrink);
chgDataRouter.get("/on-hand-inventory-by-month", shrinkView.handleGetMonthlyShrink);
chgDataRouter.get("/on-hand-inventory-by-year", shrinkView.handleGetYearlyShrink);
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
chgDataRouter.get("/total-abs-expected-qty-sum", progressView.handleGetAbsTotalExpectedQty);
chgDataRouter.get("/damages", progressView.handleGetDamages);
chgDataRouter.get("/pr", progressView.handleGetProblemResolve);
chgDataRouter.get("/not-putaway-0-day-count", progressView.handleGetNotPutawayZero);
chgDataRouter.get("/not-putaway-1-day-count", progressView.handleGetNotPutawayOne);
chgDataRouter.get("/not-putaway-2-day-count", progressView.handleGetNotPutawayTwo);
chgDataRouter.get("/not-putaway-3-day-count", progressView.handleGetNotPutawayThree);
chgDataRouter.get("/not-putaway-4-day-count", progressView.handleGetNotPutawayFour);
chgDataRouter.get("/not-putaway-5-day-count", progressView.handleGetNotPutawayFive);
chgDataRouter.get("/not-putaway-6-day-count", progressView.handleGetNotPutawaySix);
chgDataRouter.get("/not-putaway-7-day-count", progressView.handleGetNotPutawaySeven);
chgDataRouter.get("/not-putaway-over-7-day-count", progressView.handleGetNotPutawayOverSeven);
chgDataRouter.get("/transitional-inv-0-day-count", progressView.handleGetTransitionalZero);
chgDataRouter.get("/transitional-inv-1-day-count", progressView.handleGetTransitionalOne);
chgDataRouter.get("/transitional-inv-2-day-count", progressView.handleGetTransitionalTwo);
chgDataRouter.get("/transitional-inv-3-day-count", progressView.handleGetTransitionalThree);
chgDataRouter.get("/transitional-inv-4-day-count", progressView.handleGetTransitionalFour);
chgDataRouter.get("/transitional-inv-5-day-count", progressView.handleGetTransitionalFive);
chgDataRouter.get("/transitional-inv-6-day-count", progressView.handleGetTransitionalSix);
chgDataRouter.get("/transitional-inv-7-day-count", progressView.handleGetTransitionalSeven);
chgDataRouter.get("/transitional-inv-over-7-day-count", progressView.handleGetTransitionalOverSeven);
chgDataRouter.get("/transitional-inv-total-count", progressView.handleGetTransitionalTotal);
chgDataRouter.get("/latest-count-data", progressView.handleGetLatestCountData);

module.exports = chgDataRouter;