import ProgressPageActionTypes from './progress.page.types';

export const CHG_requestOccupiedLocationsCounted = () => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_START,
});

export const CHG_receiveOccupiedLocations = (locations) => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_SUCCESS, 
    payload: locations, 
});

export const CHG_occupiedLocationsFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_FAILURE, 
    payload: error, 
});

export const CHG_requestOccupiedLocationsUncounted = () => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_START,
});

export const CHG_receiveOccupiedLocationsUncounted = (locations) => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_SUCCESS, 
    payload: locations, 
});

export const CHG_occupiedLocationsUncountedFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_FAILURE, 
    payload: error, 
});

export const CHG_requestEmptyLocationsCounted = () => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_START,
});

export const CHG_receiveEmptyLocationsCounted = (locations) => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_SUCCESS, 
    payload: locations, 
});

export const CHG_emptyLocationsCountedFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_FAILURE, 
    payload: error, 
});

export const CHG_requestEmptyLocationsUncounted = () => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_START,
});
export const CHG_receiveEmptyLocationsUncounted = (locations) => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_SUCCESS, 
    payload: locations, 
});

export const CHG_emptyLocationsUncountedFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_FAILURE, 
    payload: error, 
});

export const CHG_requestExpectedQty = () => ({
    type: ProgressPageActionTypes.CHG_EXPECTED_QTY_START,
});
export const CHG_receiveExpectedQty = (locations) => ({
    type: ProgressPageActionTypes.CHG_EXPECTED_QTY_SUCCESS, 
    payload: locations, 
});

export const CHG_expectedQtyFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_EXPECTED_QTY_FAILURE, 
    payload: error, 
});

export const CHG_requestVarianceQty = () => ({
    type: ProgressPageActionTypes.CHG_VARIANCE_QTY_START,
});
export const CHG_receivevarianceQty = (locations) => ({
    type: ProgressPageActionTypes.CHG_VARIANCE_QTY_SUCCESS, 
    payload: locations, 
});

export const CHG_varianceQtyFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_VARIANCE_QTY_FAILURE, 
    payload: error, 
});

export const CHG_requestUniqueLocs = () => ({
    type: ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_START,
});

export const CHG_receiveUniqueLocs = (locationCount) => ({
    type: ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_SUCCESS, 
    payload: locationCount, 
});

export const CHG_uniqueLocsFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_FAILURE, 
    payload: error, 
});

export const CHG_requestLocsWithVarianceCount = () => ({
    type: ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_START,
});

export const CHG_receiveLocsWithVarianceCount= (locationsCount) => ({
    type: ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS, 
    payload: locationsCount, 
});

export const CHG_locsWithVarianceCountFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_FAILURE, 
    payload: error, 
});

// Actions for PR component
export const CHG_requestPr = () => ({
    type: ProgressPageActionTypes.CHG_PR_START, 
});

export const CHG_receivePR = (pr) => ({
    type:  ProgressPageActionTypes.CHG_PR_SUCCESS,
    payload: pr,
});

export const CHG_prFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_PR_FAILURE,
    payload: error,
});

// Actions for damages component
export const CHG_requestDmg = () => ({
    type: ProgressPageActionTypes.CHG_DMG_START,
});

export const CHG_receiveDmg =(damages) => ({
    type: ProgressPageActionTypes.CHG_DMG_SUCCESS,
    payload: damages,
});

export const CHG_dmgFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_DMG_FAILURE,
    error: error,
});

// Actions for not putaway component
export const CHG_requestNotPutaway0 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_START,
});

export const CHG_receiveNotPutaway0 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway0Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway1 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_START,
});

export const CHG_receiveNotPutaway1 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway1Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway2 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_START,
});

export const CHG_receiveNotPutaway2 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway2Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway3 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_START,
});

export const CHG_receiveNotPutaway3 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway3Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway4 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_START,
});

export const CHG_receiveNotPutaway4 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway4Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway5 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_START,
});

export const CHG_receiveNotPutaway5 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway5Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway6 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_START,
});

export const CHG_receiveNotPutaway6 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway6Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_FAILURE,
    error: error,
});

export const CHG_requestNotPutaway7 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_START,
});

export const CHG_receiveNotPutaway7 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutaway7Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_FAILURE,
    error: error,
});

export const CHG_requestNotPutawayOver7 = () => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_START,
});

export const CHG_receiveNotPutawayOver7 =(notPutaway) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_SUCCESS,
    payload: notPutaway,
});

export const CHG_notPutawayOver7Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_FAILURE,
    error: error,
});

// Transitional component actions 
export const CHG_requestTransitional0 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_0_START,
});

export const CHG_receiveTransitional0 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_0_SUCCESS,
    payload: transitional,
});

export const CHG_transitional0Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_0_FAILURE,
    error: error,
});

export const CHG_requestTransitional1 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_1_START,
});

export const CHG_receiveTransitional1 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_1_SUCCESS,
    payload: transitional,
});

export const CHG_transitional1Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_1_FAILURE,
    error: error,
});

export const CHG_requestTransitional2 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_2_START,
});

export const CHG_receiveTransitional2 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_2_SUCCESS,
    payload: transitional,
});

export const CHG_transitional2Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_2_FAILURE,
    error: error,
});

export const CHG_requestTransitional3 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_3_START,
});

export const CHG_receiveTransitional3 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_3_SUCCESS,
    payload: transitional,
});

export const CHG_transitional3Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_3_FAILURE,
    error: error,
});

export const CHG_requestTransitional4 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_4_START,
});

export const CHG_receiveTransitional4 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_4_SUCCESS,
    payload: transitional,
});

export const CHG_transitional4Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_4_FAILURE,
    error: error,
});

export const CHG_requestTransitional5 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_5_START,
});

export const CHG_receiveTransitional5 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_5_SUCCESS,
    payload: transitional,
});

export const CHG_transitional5Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_5_FAILURE,
    error: error,
});

export const CHG_requestTransitional6 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_6_START,
});

export const CHG_receiveTransitional6 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_6_SUCCESS,
    payload: transitional,
});

export const CHG_transitional6Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_6_FAILURE,
    error: error,
});

export const CHG_requestTransitional7 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_7_START,
});

export const CHG_receiveTransitional7 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_7_SUCCESS,
    payload: transitional,
});

export const CHG_transitional7Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_7_FAILURE,
    error: error,
});

export const CHG_requestTransitionalOver7 = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_OVER_7_START,
});

export const CHG_receiveTransitionalOver7 =(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_OVER_7_SUCCESS,
    payload: transitional,
});

export const CHG_transitionalOver7Failure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_OVER_7_FAILURE,
    error: error,
});

export const CHG_requestTransitionalTotal = () => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_TOTAL_START,
});

export const CHG_receiveTransitionalTotal=(transitional) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_TOTAL_SUCCESS,
    payload: transitional,
});

export const CHG_transitionalTotalFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_TRANSITIONAL_TOTAL_FAILURE,
    error: error,
});

export const CHG_requestLatestCountData = () => ({
    type: ProgressPageActionTypes.CHG_LATEST_COUNT_DATA_START,
});

export const CHG_receiveLatestCountData=(latestCount) => ({
    type: ProgressPageActionTypes.CHG_LATEST_COUNT_DATA_SUCCESS,
    payload: latestCount,
});

export const CHG_latestCountDataFailure = (error) => ({
    type: ProgressPageActionTypes.CHG_LATEST_COUNT_DATA_FAILURE,
    error: error,
});

