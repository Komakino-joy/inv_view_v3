import ProgressPageActionTypes from './progress.page.types';

export const CHG_requestOccupiedLocations = () => ({
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
