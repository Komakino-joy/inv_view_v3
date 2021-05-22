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