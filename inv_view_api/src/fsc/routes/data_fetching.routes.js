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


const fscDataRouter = express.Router();

//Handle duplicate entries
fscDataRouter.get("/adjustment-duplicate-check", adjustmentsController.handleGetDuplicateAdjustments);
fscDataRouter.delete("/adjustment-duplicate-delete", adjustmentsController.handleDeleteDuplicates);
fscDataRouter.get("/cyclecount-duplicate-check", countsController.handleGetDuplicateCounts );
fscDataRouter.delete("/cyclecount-duplicate-delete", countsController.handleDeleteDuplicates );

//Handle get latest entry
fscDataRouter.get("/adjustment-newest-record", adjustmentsController.handleGetLatestAdjustment);
fscDataRouter.get("/cyclecount-newest-record", countsController.handleGetLatestCount );

//Handle last uploaded times for reports GET
fscDataRouter.get("/adjustment-last-update", adjustmentsController.handleGetLastUpdate);
fscDataRouter.get("/cyclecount-last-update", countsController.handleGetLastUpdate );
fscDataRouter.get("/not-putaway-last-update", notPutawayController.handleGetLastUpdate );
fscDataRouter.get("/transtional-last-update", transInvController.handleGetLastUpdate );
fscDataRouter.get("/empty-active-last-update", emptyActiveController.handleGetLastUpdate );

//Handle last uploaded times for reports POST
fscDataRouter.post("/adjustment-last-update-post", adjustmentsController.handlePostLastUpdate);
fscDataRouter.post("/cyclecount-last-update-post", countsController.handlePostLastUpdate );
fscDataRouter.post("/not-putaway-last-update-post", notPutawayController.handlePostLastUpdate );
fscDataRouter.post("/transtional-last-update-post", transInvController.handlePostLastUpdate );
fscDataRouter.post("/empty-active-last-update-post", emptyActiveController.handlePostLastUpdate );

//Get on hand inventory Daily Entry 
fscDataRouter.get("/daily-on-hand-by-day", dailyOnHandController.handleGetDailyOnHand);
fscDataRouter.get("/daily-on-hand-max", dailyOnHandController.handleGetMaxDailyOnHand);

//Update on hand inventory Daily Entry 
fscDataRouter.post("/daily-on-hand-update", dailyOnHandController.insertNewDailyOnHand);
fscDataRouter.delete("/delete-daily-on-hand", dailyOnHandController.deleteDailyOnHand);

//Count detail data
fscDataRouter.get("/counts-by-day", countDetails.handleGetCountsByDay);
fscDataRouter.get("/counts-by-user", countDetails.handleGetCountsByUser);
fscDataRouter.get("/counts-by-user-by-day", countDetails.handleGetCountsByUserByDay)
//Shrink view data
fscDataRouter.get("/on-hand-inventory-by-day", shrinkView.handleGetDailyShrink);
fscDataRouter.get("/on-hand-inventory-by-week",shrinkView.handleGetWeeklyShrink);
fscDataRouter.get("/on-hand-inventory-by-month", shrinkView.handleGetMonthlyShrink);
fscDataRouter.get("/on-hand-inventory-by-year", shrinkView.handleGetYearlyShrink);
//Progress view data
fscDataRouter.get("/count-unique-locations-counted", progressView.handleGetUniqueLocationsCounted);
fscDataRouter.get("/empty-locations-counted", progressView.handleGetEmptyCounted);
fscDataRouter.get("/empty-locations-uncounted", progressView.handleGetEmptyNotCounted);
fscDataRouter.get("/occupied-locations-counted", progressView.handleGetOccupiedCounted);
fscDataRouter.get("/occupied-locations-uncounted", progressView.handleGetOccupiedNotCounted);
fscDataRouter.get("/count-variances", progressView.handleGetCountVariances);
fscDataRouter.get("/total-variance-sum", progressView.handleGetNeTotalVariance);
fscDataRouter.get("/absolute-total-variance-sum", progressView.handleGetAbsTotalVariance);
fscDataRouter.get("/total-expected-qty-sum", progressView.handleGetTotalExpectedQty);
fscDataRouter.get("/damages", progressView.handleGetDamages);
fscDataRouter.get("/pr", progressView.handleGetProblemResolve);
fscDataRouter.get("/not-putaway-0-days-count", progressView.handleGetNotPutawayZero);
fscDataRouter.get("/not-putaway-1-day-count", progressView.handleGetNotPutawayOne);
fscDataRouter.get("/not-putaway-2-day-count", progressView.handleGetNotPutawayTwo);
fscDataRouter.get("/not-putaway-3-day-count", progressView.handleGetNotPutawayThree);
fscDataRouter.get("/not-putaway-4-day-count", progressView.handleGetNotPutawayFour);
fscDataRouter.get("/not-putaway-5-day-count", progressView.handleGetNotPutawayFive);
fscDataRouter.get("/not-putaway-6-day-count", progressView.handleGetNotPutawaySix);
fscDataRouter.get("/not-putaway-7-day-count", progressView.handleGetNotPutawaySeven);
fscDataRouter.get("/not-putaway-over-7-days-count", progressView.handleGetNotPutawayOverSeven);
fscDataRouter.get("/transitional-inv-0-days-count", progressView.handleGetTransitionalZero);
fscDataRouter.get("/transitional-inv-1-day-count", progressView.handleGetTransitionalOne);
fscDataRouter.get("/transitional-inv-2-day-count", progressView.handleGetTransitionalTwo);
fscDataRouter.get("/transitional-inv-3-day-count", progressView.handleGetTransitionalThree);
fscDataRouter.get("/transitional-inv-4-day-count", progressView.handleGetTransitionalFour);
fscDataRouter.get("/transitional-inv-5-day-count", progressView.handleGetTransitionalFive);
fscDataRouter.get("/transitional-inv-6-day-count", progressView.handleGetTransitionalSix);
fscDataRouter.get("/transitional-inv-7-day-count", progressView.handleGetTransitionalSeven);
fscDataRouter.get("/transitional-inv-over-7-days-count", progressView.handleGetTransitionalOverSeven);
fscDataRouter.get("/transitional-inv-total-count", progressView.handleGetTransitionalTotal);
fscDataRouter.get("/latest-count-data", progressView.handleGetLatestCountData);

module.exports = fscDataRouter;