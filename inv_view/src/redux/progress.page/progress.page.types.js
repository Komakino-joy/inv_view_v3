const ProgressPageActionTypes = {
    // ^ CHG Progress page action types
    // CHG ActiveLocationsBreakdownactiontypes
    CHG_OCCUPIED_LOCS_COUNTED_START:'CHG_OCCUPIED_LOCS_COUNTED_START',
    CHG_OCCUPIED_LOCS_COUNTED_SUCCESS:'CHG_OCCUPIED_LOCS_COUNTED_SUCCESS',
    CHG_OCCUPIED_LOCS_COUNTED_FAILURE:'CHG_OCCUPIED_LOCS_COUNTED_FAILURE',
    CHG_OCCUPIED_LOCS_UNCOUNTED_START:'CHG_OCCUPIED_LOCS_UNCOUNTED_START',
    CHG_OCCUPIED_LOCS_UNCOUNTED_SUCCESS:'CHG_OCCUPIED_LOCS_UNCOUNTED_SUCCESS',
    CHG_OCCUPIED_LOCS_UNCOUNTED_FAILURE:'CHG_OCCUPIED_LOCS_UNCOUNTED_FAILURE',
    CHG_EMPTY_LOCS_COUNTED_START:'CHG_EMPTY_LOCS_COUNTED_START',
    CHG_EMPTY_LOCS_COUNTED_SUCCESS:'CHG_EMPTY_LOCS_COUNTED_SUCCESS',
    CHG_EMPTY_LOCS_COUNTED_FAILURE:'CHG_EMPTY_LOCS_COUNTED_FAILURE',
    CHG_EMPTY_LOCS_UNCOUNTED_START:'CHG_EMPTY_LOCS_UNCOUNTED_START',
    CHG_EMPTY_LOCS_UNCOUNTED_SUCCESS:'CHG_EMPTY_LOCS_UNCOUNTED_SUCCESS',
    CHG_EMPTY_LOCS_UNCOUNTED_FAILURE:'CHG_EMPTY_LOCS_UNCOUNTED_FAILURE',

    // CHG Countquantityoverviewactiontypes
    CHG_EXPECTED_QTY_START:'CHG_EXPECTED_QTY_START',
    CHG_EXPECTED_QTY_SUCCESS:'CHG_EXPECTED_QTY_SUCCESS',
    CHG_EXPECTED_QTY_FAILURE:'CHG_EXPECTED_QTY_FAILURE',
    CHG_ABS_EXPECTED_QTY_START:'CHG_ABS_EXPECTED_QTY_START',
    CHG_ABS_EXPECTED_QTY_SUCCESS:'CHG_ABS_EXPECTED_QTY_SUCCESS',
    CHG_ABS_EXPECTED_QTY_FAILURE:'CHG_ABS_EXPECTED_QTY_FAILURE',
    CHG_VARIANCE_QTY_START:'CHG_VARIANCE_QTY_START',
    CHG_VARIANCE_QTY_SUCCESS:'CHG_VARIANCE_QTY_SUCCESS',
    CHG_VARIANCE_QTY_FAILURE:'CHG_VARIANCE_QTY_FAILURE',

    // CHG CountVarianceoverviewactiontypes
    CHG_UNIQUE_LOCS_COUNTED_START:'CHG_UNIQUE_LOCS_COUNTED_START',
    CHG_UNIQUE_LOCS_COUNTED_SUCCESS:'CHG_UNIQUE_LOCS_COUNTED_SUCCESS',
    CHG_UNIQUE_LOCS_COUNTED_FAILURE:'CHG_UNIQUE_LOCS_COUNTED_FAILURE',
    CHG_TOTAL_COUNTS_WITH_VARIANCE_START:'CHG_TOTAL_COUNTS_WITH_VARIANCE_START',
    CHG_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS:'CHG_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS',
    CHG_TOTAL_COUNTS_WITH_VARIANCE_FAILURE:'CHG_TOTAL_COUNTS_WITH_VARIANCE_FAILURE',
    CHG_ABS_VARIANCE_QTY_START:'CHG_ABS_VARIANCE_QTY_START',
    CHG_ABS_VARIANCE_QTY_SUCCESS:'CHG_ABS_VARIANCE_QTY_SUCCESS',
    CHG_ABS_VARIANCE_QTY_FAILURE:'CHG_ABS_VARIANCE_QTY_FAILURE',

    // CHG ProblemResolveOverview
    CHG_PR_START:"CHG_PR_START",
    CHG_PR_SUCCESS:"CHG_PR_SUCCESS",
    CHG_PR_FAILURE:"CHG_PR_FAILURE",

    // CHG Damagesoverview
    CHG_DMG_START:'CHG_DMG_START',
    CHG_DMG_SUCCESS:'CHG_DMG_SUCCESS',
    CHG_DMG_FAILURE:'CHG_DMG_FAILURE',

    // CHG NotPutawayOverview
    CHG_NOT_PUTAWAY_0_START:'CHG_NOT_PUTAWAY_0_START',
    CHG_NOT_PUTAWAY_0_SUCCESS:'CHG_NOT_PUTAWAY_0_SUCCESS',
    CHG_NOT_PUTAWAY_0_FAILURE:'CHG_NOT_PUTAWAY_0_FAILURE',

    CHG_NOT_PUTAWAY_1_START:'CHG_NOT_PUTAWAY_1_START',
    CHG_NOT_PUTAWAY_1_SUCCESS:'CHG_NOT_PUTAWAY_1_SUCCESS',
    CHG_NOT_PUTAWAY_1_FAILURE:'CHG_NOT_PUTAWAY_1_FAILURE',

    CHG_NOT_PUTAWAY_2_START:'CHG_NOT_PUTAWAY_2_START',
    CHG_NOT_PUTAWAY_2_SUCCESS:'CHG_NOT_PUTAWAY_2_SUCCESS',
    CHG_NOT_PUTAWAY_2_FAILURE:'CHG_NOT_PUTAWAY_2_FAILURE',

    CHG_NOT_PUTAWAY_3_START:'CHG_NOT_PUTAWAY_3_START',
    CHG_NOT_PUTAWAY_3_SUCCESS:'CHG_NOT_PUTAWAY_3_SUCCESS',
    CHG_NOT_PUTAWAY_3_FAILURE:'CHG_NOT_PUTAWAY_3_FAILURE',

    CHG_NOT_PUTAWAY_4_START:'CHG_NOT_PUTAWAY_4_START',
    CHG_NOT_PUTAWAY_4_SUCCESS:'CHG_NOT_PUTAWAY_4_SUCCESS',
    CHG_NOT_PUTAWAY_4_FAILURE:'CHG_NOT_PUTAWAY_4_FAILURE',

    CHG_NOT_PUTAWAY_5_START:'CHG_NOT_PUTAWAY_5_START',
    CHG_NOT_PUTAWAY_5_SUCCESS:'CHG_NOT_PUTAWAY_5_SUCCESS',
    CHG_NOT_PUTAWAY_5_FAILURE:'CHG_NOT_PUTAWAY_5_FAILURE',

    CHG_NOT_PUTAWAY_6_START:'CHG_NOT_PUTAWAY_6_START',
    CHG_NOT_PUTAWAY_6_SUCCESS:'CHG_NOT_PUTAWAY_6_SUCCESS',
    CHG_NOT_PUTAWAY_6_FAILURE:'CHG_NOT_PUTAWAY_6_FAILURE',

    CHG_NOT_PUTAWAY_7_START:'CHG_NOT_PUTAWAY_7_START',
    CHG_NOT_PUTAWAY_7_SUCCESS:'CHG_NOT_PUTAWAY_7_SUCCESS',
    CHG_NOT_PUTAWAY_7_FAILURE:'CHG_NOT_PUTAWAY_7_FAILURE',

    CHG_NOT_PUTAWAY_OVER_7_START:'CHG_NOT_PUTAWAY_OVER_7_START',
    CHG_NOT_PUTAWAY_OVER_7_SUCCESS:'CHG_NOT_PUTAWAY_OVER_7_SUCCESS',
    CHG_NOT_PUTAWAY_OVER_7_FAILURE:'CHG_NOT_PUTAWAY_OVER_7_FAILURE',

    // CHG TransitionalOverview
    CHG_TRANSITIONAL_0_START:'CHG_TRANSITIONAL_0_START',
    CHG_TRANSITIONAL_0_SUCCESS:'CHG_TRANSITIONAL_0_SUCCESS',
    CHG_TRANSITIONAL_0_FAILURE:'CHG_TRANSITIONAL_0_FAILURE',

    CHG_TRANSITIONAL_1_START:'CHG_TRANSITIONAL_1_START',
    CHG_TRANSITIONAL_1_SUCCESS:'CHG_TRANSITIONAL_1_SUCCESS',
    CHG_TRANSITIONAL_1_FAILURE:'CHG_TRANSITIONAL_1_FAILURE',

    CHG_TRANSITIONAL_2_START:'CHG_TRANSITIONAL_2_START',
    CHG_TRANSITIONAL_2_SUCCESS:'CHG_TRANSITIONAL_2_SUCCESS',
    CHG_TRANSITIONAL_2_FAILURE:'CHG_TRANSITIONAL_2_FAILURE',

    CHG_TRANSITIONAL_3_START:'CHG_TRANSITIONAL_3_START',
    CHG_TRANSITIONAL_3_SUCCESS:'CHG_TRANSITIONAL_3_SUCCESS',
    CHG_TRANSITIONAL_3_FAILURE:'CHG_TRANSITIONAL_3_FAILURE',

    CHG_TRANSITIONAL_4_START:'CHG_TRANSITIONAL_4_START',
    CHG_TRANSITIONAL_4_SUCCESS:'CHG_TRANSITIONAL_4_SUCCESS',
    CHG_TRANSITIONAL_4_FAILURE:'CHG_TRANSITIONAL_4_FAILURE',

    CHG_TRANSITIONAL_5_START:'CHG_TRANSITIONAL_5_START',
    CHG_TRANSITIONAL_5_SUCCESS:'CHG_TRANSITIONAL_5_SUCCESS',
    CHG_TRANSITIONAL_5_FAILURE:'CHG_TRANSITIONAL_5_FAILURE',

    CHG_TRANSITIONAL_6_START:'CHG_TRANSITIONAL_6_START',
    CHG_TRANSITIONAL_6_SUCCESS:'CHG_TRANSITIONAL_6_SUCCESS',
    CHG_TRANSITIONAL_6_FAILURE:'CHG_TRANSITIONAL_6_FAILURE',

    CHG_TRANSITIONAL_7_START:'CHG_TRANSITIONAL_7_START',
    CHG_TRANSITIONAL_7_SUCCESS:'CHG_TRANSITIONAL_7_SUCCESS',
    CHG_TRANSITIONAL_7_FAILURE:'CHG_TRANSITIONAL_7_FAILURE',

    CHG_TRANSITIONAL_OVER_7_START:'CHG_TRANSITIONAL_OVER_7_START',
    CHG_TRANSITIONAL_OVER_7_SUCCESS:'CHG_TRANSITIONAL_OVER_7_SUCCESS',
    CHG_TRANSITIONAL_OVER_7_FAILURE:'CHG_TRANSITIONAL_OVER_7_FAILURE',

    CHG_TRANSITIONAL_TOTAL_START:'CHG_TRANSITIONAL_TOTAL_START',
    CHG_TRANSITIONAL_TOTAL_SUCCESS:'CHG_TRANSITIONAL_TOTAL_SUCCESS',
    CHG_TRANSITIONAL_TOTAL_FAILURE:'CHG_TRANSITIONAL_TOTAL_FAILURE',

    CHG_LATEST_COUNT_DATA_START:'CHG_LATEST_COUNT_DATA_START',
    CHG_LATEST_COUNT_DATA_SUCCESS:'CHG_LATEST_COUNT_DATA_SUCCESS',
    CHG_LATEST_COUNT_DATA_FAILURE:'CHG_LATEST_COUNT_DATA_FAILURE',

    // ^ FSC Progress page action types
    // FSC ActiveLocationsBreakdownactiontypes
    FSC_OCCUPIED_LOCS_COUNTED_START:'FSC_OCCUPIED_LOCS_COUNTED_START',
    FSC_OCCUPIED_LOCS_COUNTED_SUCCESS:'FSC_OCCUPIED_LOCS_COUNTED_SUCCESS',
    FSC_OCCUPIED_LOCS_COUNTED_FAILURE:'FSC_OCCUPIED_LOCS_COUNTED_FAILURE',
    FSC_OCCUPIED_LOCS_UNCOUNTED_START:'FSC_OCCUPIED_LOCS_UNCOUNTED_START',
    FSC_OCCUPIED_LOCS_UNCOUNTED_SUCCESS:'FSC_OCCUPIED_LOCS_UNCOUNTED_SUCCESS',
    FSC_OCCUPIED_LOCS_UNCOUNTED_FAILURE:'FSC_OCCUPIED_LOCS_UNCOUNTED_FAILURE',
    FSC_EMPTY_LOCS_COUNTED_START:'FSC_EMPTY_LOCS_COUNTED_START',
    FSC_EMPTY_LOCS_COUNTED_SUCCESS:'FSC_EMPTY_LOCS_COUNTED_SUCCESS',
    FSC_EMPTY_LOCS_COUNTED_FAILURE:'FSC_EMPTY_LOCS_COUNTED_FAILURE',
    FSC_EMPTY_LOCS_UNCOUNTED_START:'FSC_EMPTY_LOCS_UNCOUNTED_START',
    FSC_EMPTY_LOCS_UNCOUNTED_SUCCESS:'FSC_EMPTY_LOCS_UNCOUNTED_SUCCESS',
    FSC_EMPTY_LOCS_UNCOUNTED_FAILURE:'FSC_EMPTY_LOCS_UNCOUNTED_FAILURE',

    // FSC Countquantityoverviewactiontypes
    FSC_EXPECTED_QTY_START:'FSC_EXPECTED_QTY_START',
    FSC_EXPECTED_QTY_SUCCESS:'FSC_EXPECTED_QTY_SUCCESS',
    FSC_EXPECTED_QTY_FAILURE:'FSC_EXPECTED_QTY_FAILURE',
    FSC_ABS_EXPECTED_QTY_START:'FSC_ABS_EXPECTED_QTY_START',
    FSC_ABS_EXPECTED_QTY_SUCCESS:'FSC_ABS_EXPECTED_QTY_SUCCESS',
    FSC_ABS_EXPECTED_QTY_FAILURE:'FSC_ABS_EXPECTED_QTY_FAILURE',
    FSC_VARIANCE_QTY_START:'FSC_VARIANCE_QTY_START',
    FSC_VARIANCE_QTY_SUCCESS:'FSC_VARIANCE_QTY_SUCCESS',
    FSC_VARIANCE_QTY_FAILURE:'FSC_VARIANCE_QTY_FAILURE',
    FSC_ABS_VARIANCE_QTY_START:'FSC_ABS_VARIANCE_QTY_START',
    FSC_ABS_VARIANCE_QTY_SUCCESS:'FSC_ABS_VARIANCE_QTY_SUCCESS',
    FSC_ABS_VARIANCE_QTY_FAILURE:'FSC_ABS_VARIANCE_QTY_FAILURE',

    // FSC CountVarianceoverviewactiontypes
    FSC_UNIQUE_LOCS_COUNTED_START:'FSC_UNIQUE_LOCS_COUNTED_START',
    FSC_UNIQUE_LOCS_COUNTED_SUCCESS:'FSC_UNIQUE_LOCS_COUNTED_SUCCESS',
    FSC_UNIQUE_LOCS_COUNTED_FAILURE:'FSC_UNIQUE_LOCS_COUNTED_FAILURE',
    FSC_TOTAL_COUNTS_WITH_VARIANCE_START:'FSC_TOTAL_COUNTS_WITH_VARIANCE_START',
    FSC_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS:'FSC_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS',
    FSC_TOTAL_COUNTS_WITH_VARIANCE_FAILURE:'FSC_TOTAL_COUNTS_WITH_VARIANCE_FAILURE',

    // FSC ProblemResolveOverview
    FSC_PR_START:"FSC_PR_START",
    FSC_PR_SUCCESS:"FSC_PR_SUCCESS",
    FSC_PR_FAILURE:"FSC_PR_FAILURE",

    // FSC Damagesoverview
    FSC_DMG_START:'FSC_DMG_START',
    FSC_DMG_SUCCESS:'FSC_DMG_SUCCESS',
    FSC_DMG_FAILURE:'FSC_DMG_FAILURE',

    // FSC NotPutawayOverview
    FSC_NOT_PUTAWAY_0_START:'FSC_NOT_PUTAWAY_0_START',
    FSC_NOT_PUTAWAY_0_SUCCESS:'FSC_NOT_PUTAWAY_0_SUCCESS',
    FSC_NOT_PUTAWAY_0_FAILURE:'FSC_NOT_PUTAWAY_0_FAILURE',

    FSC_NOT_PUTAWAY_1_START:'FSC_NOT_PUTAWAY_1_START',
    FSC_NOT_PUTAWAY_1_SUCCESS:'FSC_NOT_PUTAWAY_1_SUCCESS',
    FSC_NOT_PUTAWAY_1_FAILURE:'FSC_NOT_PUTAWAY_1_FAILURE',

    FSC_NOT_PUTAWAY_2_START:'FSC_NOT_PUTAWAY_2_START',
    FSC_NOT_PUTAWAY_2_SUCCESS:'FSC_NOT_PUTAWAY_2_SUCCESS',
    FSC_NOT_PUTAWAY_2_FAILURE:'FSC_NOT_PUTAWAY_2_FAILURE',

    FSC_NOT_PUTAWAY_3_START:'FSC_NOT_PUTAWAY_3_START',
    FSC_NOT_PUTAWAY_3_SUCCESS:'FSC_NOT_PUTAWAY_3_SUCCESS',
    FSC_NOT_PUTAWAY_3_FAILURE:'FSC_NOT_PUTAWAY_3_FAILURE',

    FSC_NOT_PUTAWAY_4_START:'FSC_NOT_PUTAWAY_4_START',
    FSC_NOT_PUTAWAY_4_SUCCESS:'FSC_NOT_PUTAWAY_4_SUCCESS',
    FSC_NOT_PUTAWAY_4_FAILURE:'FSC_NOT_PUTAWAY_4_FAILURE',

    FSC_NOT_PUTAWAY_5_START:'FSC_NOT_PUTAWAY_5_START',
    FSC_NOT_PUTAWAY_5_SUCCESS:'FSC_NOT_PUTAWAY_5_SUCCESS',
    FSC_NOT_PUTAWAY_5_FAILURE:'FSC_NOT_PUTAWAY_5_FAILURE',

    FSC_NOT_PUTAWAY_6_START:'FSC_NOT_PUTAWAY_6_START',
    FSC_NOT_PUTAWAY_6_SUCCESS:'FSC_NOT_PUTAWAY_6_SUCCESS',
    FSC_NOT_PUTAWAY_6_FAILURE:'FSC_NOT_PUTAWAY_6_FAILURE',

    FSC_NOT_PUTAWAY_7_START:'FSC_NOT_PUTAWAY_7_START',
    FSC_NOT_PUTAWAY_7_SUCCESS:'FSC_NOT_PUTAWAY_7_SUCCESS',
    FSC_NOT_PUTAWAY_7_FAILURE:'FSC_NOT_PUTAWAY_7_FAILURE',

    FSC_NOT_PUTAWAY_OVER_7_START:'FSC_NOT_PUTAWAY_OVER_7_START',
    FSC_NOT_PUTAWAY_OVER_7_SUCCESS:'FSC_NOT_PUTAWAY_OVER_7_SUCCESS',
    FSC_NOT_PUTAWAY_OVER_7_FAILURE:'FSC_NOT_PUTAWAY_OVER_7_FAILURE',

    // FSC TransitionalOverview
    FSC_TRANSITIONAL_0_START:'FSC_TRANSITIONAL_0_START',
    FSC_TRANSITIONAL_0_SUCCESS:'FSC_TRANSITIONAL_0_SUCCESS',
    FSC_TRANSITIONAL_0_FAILURE:'FSC_TRANSITIONAL_0_FAILURE',

    FSC_TRANSITIONAL_1_START:'FSC_TRANSITIONAL_1_START',
    FSC_TRANSITIONAL_1_SUCCESS:'FSC_TRANSITIONAL_1_SUCCESS',
    FSC_TRANSITIONAL_1_FAILURE:'FSC_TRANSITIONAL_1_FAILURE',

    FSC_TRANSITIONAL_2_START:'FSC_TRANSITIONAL_2_START',
    FSC_TRANSITIONAL_2_SUCCESS:'FSC_TRANSITIONAL_2_SUCCESS',
    FSC_TRANSITIONAL_2_FAILURE:'FSC_TRANSITIONAL_2_FAILURE',

    FSC_TRANSITIONAL_3_START:'FSC_TRANSITIONAL_3_START',
    FSC_TRANSITIONAL_3_SUCCESS:'FSC_TRANSITIONAL_3_SUCCESS',
    FSC_TRANSITIONAL_3_FAILURE:'FSC_TRANSITIONAL_3_FAILURE',

    FSC_TRANSITIONAL_4_START:'FSC_TRANSITIONAL_4_START',
    FSC_TRANSITIONAL_4_SUCCESS:'FSC_TRANSITIONAL_4_SUCCESS',
    FSC_TRANSITIONAL_4_FAILURE:'FSC_TRANSITIONAL_4_FAILURE',

    FSC_TRANSITIONAL_5_START:'FSC_TRANSITIONAL_5_START',
    FSC_TRANSITIONAL_5_SUCCESS:'FSC_TRANSITIONAL_5_SUCCESS',
    FSC_TRANSITIONAL_5_FAILURE:'FSC_TRANSITIONAL_5_FAILURE',

    FSC_TRANSITIONAL_6_START:'FSC_TRANSITIONAL_6_START',
    FSC_TRANSITIONAL_6_SUCCESS:'FSC_TRANSITIONAL_6_SUCCESS',
    FSC_TRANSITIONAL_6_FAILURE:'FSC_TRANSITIONAL_6_FAILURE',

    FSC_TRANSITIONAL_7_START:'FSC_TRANSITIONAL_7_START',
    FSC_TRANSITIONAL_7_SUCCESS:'FSC_TRANSITIONAL_7_SUCCESS',
    FSC_TRANSITIONAL_7_FAILURE:'FSC_TRANSITIONAL_7_FAILURE',

    FSC_TRANSITIONAL_OVER_7_START:'FSC_TRANSITIONAL_OVER_7_START',
    FSC_TRANSITIONAL_OVER_7_SUCCESS:'FSC_TRANSITIONAL_OVER_7_SUCCESS',
    FSC_TRANSITIONAL_OVER_7_FAILURE:'FSC_TRANSITIONAL_OVER_7_FAILURE',

    FSC_TRANSITIONAL_TOTAL_START:'FSC_TRANSITIONAL_TOTAL_START',
    FSC_TRANSITIONAL_TOTAL_SUCCESS:'FSC_TRANSITIONAL_TOTAL_SUCCESS',
    FSC_TRANSITIONAL_TOTAL_FAILURE:'FSC_TRANSITIONAL_TOTAL_FAILURE',

    FSC_LATEST_COUNT_DATA_START:'FSC_LATEST_COUNT_DATA_START',
    FSC_LATEST_COUNT_DATA_SUCCESS:'FSC_LATEST_COUNT_DATA_SUCCESS',
    FSC_LATEST_COUNT_DATA_FAILURE:'FSC_LATEST_COUNT_DATA_FAILURE',

};

export default ProgressPageActionTypes;