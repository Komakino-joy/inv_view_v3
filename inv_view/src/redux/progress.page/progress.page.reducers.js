import ProgressPageActionTypes  from './progress.page.types';

const INITIAL_STATE = {
    CHG_occupiedLocCounted : 0,
    CHG_occupiedLocUnCounted: 0,
    CHG_emptyLocCounted: 0,
    CHG_emptyLocUncounted: 0,
    CHG_expectedQty: 0,
    CHG_varianceQty: 0,
    CHG_uniqueLocsCounted: 0,
    CHG_locsWithVarianceCount: 0,
    CHG_pr: 0,
    CHG_damages: 0,
    error: null,
}

const progressData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                CHG_occupiedLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                CHG_occupiedLocUnCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                CHG_emptyLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                CHG_emptyLocUncounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EXPECTED_QTY_SUCCESS:
            return {
                ...state, 
                CHG_expectedQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_VARIANCE_QTY_SUCCESS:
            return {
                ...state, 
                CHG_varianceQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                CHG_uniqueLocsCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS:
            return {
                ...state, 
                CHG_locsWithVarianceCount : action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_PR_SUCCESS:
            return{
                ...state,
                CHG_pr: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_DMG_SUCCESS:
            return {
                ...state,
                CHG_damages: action.payload,
                error: null
            };

        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EXPECTED_QTY_FAILURE:
        case ProgressPageActionTypes.CHG_VARIANCE_QTY_FAILURE:
        case ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_FAILURE:
        case ProgressPageActionTypes.CHG_PR_FAILURE:
        case ProgressPageActionTypes.CHG_DMG_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default progressData;