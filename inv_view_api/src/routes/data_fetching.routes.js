const express = require("express");

const CHG_countDetails = require("../controllers/chg_controllers/count_details/count_detail.controller")
const CHG_progressView = require("../controllers/chg_controllers/progress_view/progress_view.controller")
const CHG_shrinkView = require("../controllers/chg_controllers/shrink_data/shrink_data.controller")
const CHG_notPutawayController = require("../controllers/chg_controllers/not_putaway/not_putaway.excel.controller");
const CHG_emptyActiveController = require("../controllers/chg_controllers/empty_active_locations/empty_active.excel.controller");
const CHG_transInvController = require("../controllers/chg_controllers/transitional_inventory/transitional.inventory.excel.controller"); 
const CHG_countsController = require("../controllers/chg_controllers/cycle_counts/cycle_counts.excel.controller");
const CHG_adjustmentsController = require("../controllers/chg_controllers/inventory_adjustments/inventory_adjustments.excel.controller");
const CHG_dailyOnHandController = require("../controllers/chg_controllers/daily_on_hand/daily_on_hand.controller");

const FSC_countDetails = require("../controllers/fsc_controllers/count_details/count_detail.controller")
const FSC_progressView = require("../controllers/fsc_controllers/progress_view/progress_view.controller")
const FSC_shrinkView = require("../controllers/fsc_controllers/shrink_data/shrink_data.controller")
const FSC_notPutawayController = require("../controllers/fsc_controllers/not_putaway/not_putaway.controller");
const FSC_emptyActiveController = require("../controllers/fsc_controllers/empty_active_locations/empty_active.controller");
const FSC_transInvController = require("../controllers/fsc_controllers/transitional_inventory/transitional.inventory.controller"); 
const FSC_countsController = require("../controllers/fsc_controllers/cycle_counts/cycle_counts.controller");
const FSC_adjustmentsController = require("../controllers/fsc_controllers/inventory_adjustments/inventory_adjustments.controller");
const FSC_dailyOnHandController = require("../controllers/fsc_controllers/daily_on_hand/daily_on_hand.controller");

const chgDataRouter = express.Router();
const fscDataRouter = express.Router();

//Handle duplicate entries
chgDataRouter.get("/adjustment-duplicate-check", CHG_adjustmentsController.handleGetDuplicateAdjustments);
chgDataRouter.delete("/adjustment-duplicate-delete", CHG_adjustmentsController.handleDeleteDuplicates);
chgDataRouter.get("/cyclecount-duplicate-check", CHG_countsController.handleGetDuplicateCounts );
chgDataRouter.delete("/cyclecount-duplicate-delete", CHG_countsController.handleDeleteDuplicates );

//Handle get latest entry
chgDataRouter.get("/adjustment-newest-record", CHG_adjustmentsController.handleGetLatestAdjustment);
chgDataRouter.get("/cyclecount-newest-record", CHG_countsController.handleGetLatestCount );

//Handle last uploaded times for reports GET
chgDataRouter.get("/adjustment-last-update", CHG_adjustmentsController.handleGetLastUpdate);
chgDataRouter.get("/cyclecount-last-update", CHG_countsController.handleGetLastUpdate );
chgDataRouter.get("/not-putaway-last-update", CHG_notPutawayController.handleGetLastUpdate );
chgDataRouter.get("/transitional-last-update", CHG_transInvController.handleGetLastUpdate );
chgDataRouter.get("/empty-active-last-update", CHG_emptyActiveController.handleGetLastUpdate );

//Handle last uploaded times for reports POST
chgDataRouter.post("/adjustment-last-update-post", CHG_adjustmentsController.handlePostLastUpdate);
chgDataRouter.post("/cyclecount-last-update-post", CHG_countsController.handlePostLastUpdate );
chgDataRouter.post("/not-putaway-last-update-post", CHG_notPutawayController.handlePostLastUpdate );
chgDataRouter.post("/transitional-last-update-post", CHG_transInvController.handlePostLastUpdate );
chgDataRouter.post("/empty-active-last-update-post", CHG_emptyActiveController.handlePostLastUpdate );

//Get on hand inventory Daily Entry 
chgDataRouter.get("/daily-on-hand-by-day", CHG_dailyOnHandController.handleGetDailyOnHand);
chgDataRouter.get("/daily-on-hand-max", CHG_dailyOnHandController.handleGetMaxDailyOnHand);

//Update on hand inventory Daily Entry 
chgDataRouter.post("/daily-on-hand-update", CHG_dailyOnHandController.insertNewDailyOnHand);
chgDataRouter.delete("/delete-daily-on-hand", CHG_dailyOnHandController.deleteDailyOnHand);

//Count detail data
chgDataRouter.get("/counts-by-day", CHG_countDetails.handleGetCountsByDay);
chgDataRouter.get("/counts-by-user", CHG_countDetails.handleGetCountsByUser);
chgDataRouter.get("/counts-by-user-by-day", CHG_countDetails.handleGetCountsByUserByDay)
//Shrink view data
chgDataRouter.get("/on-hand-inventory-by-day", CHG_shrinkView.handleGetDailyShrink);
chgDataRouter.get("/on-hand-inventory-by-week", CHG_shrinkView.handleGetWeeklyShrink);
chgDataRouter.get("/on-hand-inventory-by-month", CHG_shrinkView.handleGetMonthlyShrink);
chgDataRouter.get("/on-hand-inventory-by-year", CHG_shrinkView.handleGetYearlyShrink);
//Progress view data
chgDataRouter.get("/count-unique-locations-counted", CHG_progressView.handleGetUniqueLocationsCounted);
chgDataRouter.get("/empty-locations-counted", CHG_progressView.handleGetEmptyCounted);
chgDataRouter.get("/empty-locations-uncounted", CHG_progressView.handleGetEmptyNotCounted);
chgDataRouter.get("/occupied-locations-counted", CHG_progressView.handleGetOccupiedCounted);
chgDataRouter.get("/occupied-locations-uncounted", CHG_progressView.handleGetOccupiedNotCounted);
chgDataRouter.get("/count-variances", CHG_progressView.handleGetCountVariances);
chgDataRouter.get("/total-variance-sum", CHG_progressView.handleGetNeTotalVariance);
chgDataRouter.get("/absolute-total-variance-sum", CHG_progressView.handleGetAbsTotalVariance);
chgDataRouter.get("/total-expected-qty-sum", CHG_progressView.handleGetTotalExpectedQty);
chgDataRouter.get("/total-abs-expected-qty-sum", CHG_progressView.handleGetAbsTotalExpectedQty);
chgDataRouter.get("/damages", CHG_progressView.handleGetDamages);
chgDataRouter.get("/pr", CHG_progressView.handleGetProblemResolve);
chgDataRouter.get("/not-putaway-0-day-count", CHG_progressView.handleGetNotPutawayZero);
chgDataRouter.get("/not-putaway-1-day-count", CHG_progressView.handleGetNotPutawayOne);
chgDataRouter.get("/not-putaway-2-day-count", CHG_progressView.handleGetNotPutawayTwo);
chgDataRouter.get("/not-putaway-3-day-count", CHG_progressView.handleGetNotPutawayThree);
chgDataRouter.get("/not-putaway-4-day-count", CHG_progressView.handleGetNotPutawayFour);
chgDataRouter.get("/not-putaway-5-day-count", CHG_progressView.handleGetNotPutawayFive);
chgDataRouter.get("/not-putaway-6-day-count", CHG_progressView.handleGetNotPutawaySix);
chgDataRouter.get("/not-putaway-7-day-count", CHG_progressView.handleGetNotPutawaySeven);
chgDataRouter.get("/not-putaway-over-7-day-count", CHG_progressView.handleGetNotPutawayOverSeven);
chgDataRouter.get("/transitional-inv-0-day-count", CHG_progressView.handleGetTransitionalZero);
chgDataRouter.get("/transitional-inv-1-day-count", CHG_progressView.handleGetTransitionalOne);
chgDataRouter.get("/transitional-inv-2-day-count", CHG_progressView.handleGetTransitionalTwo);
chgDataRouter.get("/transitional-inv-3-day-count", CHG_progressView.handleGetTransitionalThree);
chgDataRouter.get("/transitional-inv-4-day-count", CHG_progressView.handleGetTransitionalFour);
chgDataRouter.get("/transitional-inv-5-day-count", CHG_progressView.handleGetTransitionalFive);
chgDataRouter.get("/transitional-inv-6-day-count", CHG_progressView.handleGetTransitionalSix);
chgDataRouter.get("/transitional-inv-7-day-count", CHG_progressView.handleGetTransitionalSeven);
chgDataRouter.get("/transitional-inv-over-7-day-count", CHG_progressView.handleGetTransitionalOverSeven);
chgDataRouter.get("/transitional-inv-total-count", CHG_progressView.handleGetTransitionalTotal);
chgDataRouter.get("/latest-count-data", CHG_progressView.handleGetLatestCountData);


//Handle duplicate entries
fscDataRouter.get("/adjustment-duplicate-check", FSC_adjustmentsController.handleGetDuplicateAdjustments);
fscDataRouter.delete("/adjustment-duplicate-delete", FSC_adjustmentsController.handleDeleteDuplicates);
fscDataRouter.get("/cyclecount-duplicate-check", FSC_countsController.handleGetDuplicateCounts );
fscDataRouter.delete("/cyclecount-duplicate-delete", FSC_countsController.handleDeleteDuplicates );

//Handle get latest entry
fscDataRouter.get("/adjustment-newest-record", FSC_adjustmentsController.handleGetLatestAdjustment);
fscDataRouter.get("/cyclecount-newest-record", FSC_countsController.handleGetLatestCount );

//Handle last uploaded times for reports GET
fscDataRouter.get("/adjustment-last-update", FSC_adjustmentsController.handleGetLastUpdate);
fscDataRouter.get("/cyclecount-last-update", FSC_countsController.handleGetLastUpdate );
fscDataRouter.get("/not-putaway-last-update", FSC_notPutawayController.handleGetLastUpdate );
fscDataRouter.get("/transitional-last-update", FSC_transInvController.handleGetLastUpdate );
fscDataRouter.get("/empty-active-last-update", FSC_emptyActiveController.handleGetLastUpdate );

//Handle last uploaded times for reports POST
fscDataRouter.post("/adjustment-last-update-post", FSC_adjustmentsController.handlePostLastUpdate);
fscDataRouter.post("/cyclecount-last-update-post", FSC_countsController.handlePostLastUpdate );
fscDataRouter.post("/not-putaway-last-update-post", FSC_notPutawayController.handlePostLastUpdate );
fscDataRouter.post("/transitional-last-update-post", FSC_transInvController.handlePostLastUpdate );
fscDataRouter.post("/empty-active-last-update-post", FSC_emptyActiveController.handlePostLastUpdate );

//Get on hand inventory Daily Entry 
fscDataRouter.get("/daily-on-hand-by-day", FSC_dailyOnHandController.handleGetDailyOnHand);
fscDataRouter.get("/daily-on-hand-max", FSC_dailyOnHandController.handleGetMaxDailyOnHand);

//Update on hand inventory Daily Entry 
fscDataRouter.post("/daily-on-hand-update", FSC_dailyOnHandController.insertNewDailyOnHand);
fscDataRouter.delete("/delete-daily-on-hand", FSC_dailyOnHandController.deleteDailyOnHand);

//Count detail data
fscDataRouter.get("/counts-by-day", FSC_countDetails.handleGetCountsByDay);
fscDataRouter.get("/counts-by-user", FSC_countDetails.handleGetCountsByUser);
fscDataRouter.get("/counts-by-user-by-day", FSC_countDetails.handleGetCountsByUserByDay)
//Shrink view data
fscDataRouter.get("/on-hand-inventory-by-day", FSC_shrinkView.handleGetDailyShrink);
fscDataRouter.get("/on-hand-inventory-by-week",FSC_shrinkView.handleGetWeeklyShrink);
fscDataRouter.get("/on-hand-inventory-by-month", FSC_shrinkView.handleGetMonthlyShrink);
fscDataRouter.get("/on-hand-inventory-by-year", FSC_shrinkView.handleGetYearlyShrink);
//Progress view data
fscDataRouter.get("/count-unique-locations-counted", FSC_progressView.handleGetUniqueLocationsCounted);
fscDataRouter.get("/empty-locations-counted", FSC_progressView.handleGetEmptyCounted);
fscDataRouter.get("/empty-locations-uncounted", FSC_progressView.handleGetEmptyNotCounted);
fscDataRouter.get("/occupied-locations-counted", FSC_progressView.handleGetOccupiedCounted);
fscDataRouter.get("/occupied-locations-uncounted", FSC_progressView.handleGetOccupiedNotCounted);
fscDataRouter.get("/count-variances", FSC_progressView.handleGetCountVariances);
fscDataRouter.get("/total-variance-sum", FSC_progressView.handleGetNetTotalVariance);
fscDataRouter.get("/absolute-total-variance-sum", FSC_progressView.handleGetAbsTotalVariance);
fscDataRouter.get("/total-expected-qty-sum", FSC_progressView.handleGetTotalExpectedQty);
fscDataRouter.get("/total-abs-expected-qty-sum", FSC_progressView.handleGetAbsTotalExpectedQty);
fscDataRouter.get("/damages", FSC_progressView.handleGetDamages);
fscDataRouter.get("/pr", FSC_progressView.handleGetProblemResolve);
fscDataRouter.get("/not-putaway-0-day-count", FSC_progressView.handleGetNotPutawayZero);
fscDataRouter.get("/not-putaway-1-day-count", FSC_progressView.handleGetNotPutawayOne);
fscDataRouter.get("/not-putaway-2-day-count", FSC_progressView.handleGetNotPutawayTwo);
fscDataRouter.get("/not-putaway-3-day-count", FSC_progressView.handleGetNotPutawayThree);
fscDataRouter.get("/not-putaway-4-day-count", FSC_progressView.handleGetNotPutawayFour);
fscDataRouter.get("/not-putaway-5-day-count", FSC_progressView.handleGetNotPutawayFive);
fscDataRouter.get("/not-putaway-6-day-count", FSC_progressView.handleGetNotPutawaySix);
fscDataRouter.get("/not-putaway-7-day-count", FSC_progressView.handleGetNotPutawaySeven);
fscDataRouter.get("/not-putaway-over-7-day-count", FSC_progressView.handleGetNotPutawayOverSeven);
fscDataRouter.get("/transitional-inv-0-day-count", FSC_progressView.handleGetTransitionalZero);
fscDataRouter.get("/transitional-inv-1-day-count", FSC_progressView.handleGetTransitionalOne);
fscDataRouter.get("/transitional-inv-2-day-count", FSC_progressView.handleGetTransitionalTwo);
fscDataRouter.get("/transitional-inv-3-day-count", FSC_progressView.handleGetTransitionalThree);
fscDataRouter.get("/transitional-inv-4-day-count", FSC_progressView.handleGetTransitionalFour);
fscDataRouter.get("/transitional-inv-5-day-count", FSC_progressView.handleGetTransitionalFive);
fscDataRouter.get("/transitional-inv-6-day-count", FSC_progressView.handleGetTransitionalSix);
fscDataRouter.get("/transitional-inv-7-day-count", FSC_progressView.handleGetTransitionalSeven);
fscDataRouter.get("/transitional-inv-over-7-day-count", FSC_progressView.handleGetTransitionalOverSeven);
fscDataRouter.get("/transitional-inv-total-count", FSC_progressView.handleGetTransitionalTotal);
fscDataRouter.get("/latest-count-data", FSC_progressView.handleGetLatestCountData);

module.exports = {
    chgDataRouter,
    fscDataRouter
};