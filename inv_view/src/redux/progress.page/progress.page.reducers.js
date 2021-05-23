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
    CHG_notPutaway0: 0,
    CHG_notPutaway1: 0,
    CHG_notPutaway2: 0,
    CHG_notPutaway3: 0,
    CHG_notPutaway4: 0,
    CHG_notPutaway5: 0,
    CHG_notPutaway6: 0,
    CHG_notPutaway7: 0,
    CHG_notPutawayOver7: 0,
    CHG_transitional0: 0,
    CHG_transitional1: 0,
    CHG_transitional2: 0,
    CHG_transitional3: 0,
    CHG_transitional4: 0,
    CHG_transitional5: 0,
    CHG_transitional6: 0,
    CHG_transitional7: 0,
    CHG_transitionalOver7: 0,
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
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_SUCCESS:
            return {
                ...state,
                CHG_notPutaway0: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_SUCCESS:
            return {
                ...state,
                CHG_notPutaway1: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_SUCCESS:
            return {
                ...state,
                CHG_notPutaway2: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_SUCCESS:
            return {
                ...state,
                CHG_notPutaway3: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_SUCCESS:
            return {
                ...state,
                CHG_notPutaway4: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_SUCCESS:
            return {
                ...state,
                CHG_notPutaway5: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_SUCCESS:
            return {
                ...state,
                CHG_notPutaway6: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_SUCCESS:
            return {
                ...state,
                CHG_notPutaway7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_SUCCESS:
            return {
                ...state,
                CHG_notPutawayOver7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_TRANSITIONAL_0_SUCCESS:
            return {
                ...state,
                CHG_transitional0: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_1_SUCCESS:
            return {
                ...state,
                CHG_transitional1: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_2_SUCCESS:
            return {
                ...state,
                CHG_transitional2: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_3_SUCCESS:
            return {
                ...state,
                CHG_transitional3: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_4_SUCCESS:
            return {
                ...state,
                CHG_transitional4: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_5_SUCCESS:
            return {
                ...state,
                CHG_transitional5: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_6_SUCCESS:
            return {
                ...state,
                CHG_transitional6: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_7_SUCCESS:
            return {
                ...state,
                CHG_transitional7: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_OVER_7_SUCCESS:
            return {
                ...state,
                CHG_transitionalOver7: action.payload,
                error: null,
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
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_FAILURE:
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_0_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_1_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_2_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_3_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_4_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_5_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_6_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_7_FAILURE:
        case ProgressPageActionTypes.CHG_TRANSITONAL_OVER_7_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default progressData;