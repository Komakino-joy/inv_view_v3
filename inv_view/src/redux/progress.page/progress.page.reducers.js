import ProgressPageActionTypes  from './progress.page.types';

const INITIAL_STATE = {
    occupiedLocCounted : 0,
    occupiedLocUnCounted: 0,
    emptyLocCounted: 0,
    emptyLocUncounted: 0,
    expectedQty: 0,
    varianceQty: 0,
    uniqueLocsCounted: 0,
    locsWithVarianceCount: 0,
    pr: 0,
    damages: 0,
    notPutaway0: 0,
    notPutaway1: 0,
    notPutaway2: 0,
    notPutaway3: 0,
    notPutaway4: 0,
    notPutaway5: 0,
    notPutaway6: 0,
    notPutaway7: 0,
    notPutawayOver7: 0,
    transitional0: 0,
    transitional1: 0,
    transitional2: 0,
    transitional3: 0,
    transitional4: 0,
    transitional5: 0,
    transitional6: 0,
    transitional7: 0,
    transitionalOver7: 0,
    transitionalTotal: 0,
    latestCountData: 0,
    error: null,
}

export const CHG_progressData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                occupiedLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                occupiedLocUnCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                emptyLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                emptyLocUncounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_EXPECTED_QTY_SUCCESS:
            return {
                ...state, 
                expectedQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_VARIANCE_QTY_SUCCESS:
            return {
                ...state, 
                varianceQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                uniqueLocsCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS:
            return {
                ...state, 
                locsWithVarianceCount : action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_PR_SUCCESS:
            return{
                ...state,
                pr: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_DMG_SUCCESS:
            return {
                ...state,
                damages: action.payload,
                error: null
            };
        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_SUCCESS:
            return {
                ...state,
                notPutaway0: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_SUCCESS:
            return {
                ...state,
                notPutaway1: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_SUCCESS:
            return {
                ...state,
                notPutaway2: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_SUCCESS:
            return {
                ...state,
                notPutaway3: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_SUCCESS:
            return {
                ...state,
                notPutaway4: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_SUCCESS:
            return {
                ...state,
                notPutaway5: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_SUCCESS:
            return {
                ...state,
                notPutaway6: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_SUCCESS:
            return {
                ...state,
                notPutaway7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_NOT_PUTAWAY_OVER_7_SUCCESS:
            return {
                ...state,
                notPutawayOver7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_TRANSITIONAL_0_SUCCESS:
            return {
                ...state,
                transitional0: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_1_SUCCESS:
            return {
                ...state,
                transitional1: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_2_SUCCESS:
            return {
                ...state,
                transitional2: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_3_SUCCESS:
            return {
                ...state,
                transitional3: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_4_SUCCESS:
            return {
                ...state,
                transitional4: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_5_SUCCESS:
            return {
                ...state,
                transitional5: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_6_SUCCESS:
            return {
                ...state,
                transitional6: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_7_SUCCESS:
            return {
                ...state,
                transitional7: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_OVER_7_SUCCESS:
            return {
                ...state,
                transitionalOver7: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.CHG_TRANSITIONAL_TOTAL_SUCCESS:
            return {
                ...state,
                transitionalTotal: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.CHG_LATEST_COUNT_DATA_SUCCESS:
            return {
                ...state,
                latestCountData: action.payload,
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

export const FSC_progressData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProgressPageActionTypes.FSC_OCCUPIED_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                occupiedLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_OCCUPIED_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                occupiedLocUnCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_EMPTY_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                emptyLocCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_EMPTY_LOCS_UNCOUNTED_SUCCESS:
            return {
                ...state, 
                emptyLocUncounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_EXPECTED_QTY_SUCCESS:
            return {
                ...state, 
                expectedQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_VARIANCE_QTY_SUCCESS:
            return {
                ...state, 
                varianceQty : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_UNIQUE_LOCS_COUNTED_SUCCESS:
            return {
                ...state, 
                uniqueLocsCounted : action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_TOTAL_COUNTS_WITH_VARIANCE_SUCCESS:
            return {
                ...state, 
                locsWithVarianceCount : action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_PR_SUCCESS:
            return{
                ...state,
                pr: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_DMG_SUCCESS:
            return {
                ...state,
                damages: action.payload,
                error: null
            };
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_0_SUCCESS:
            return {
                ...state,
                notPutaway0: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_1_SUCCESS:
            return {
                ...state,
                notPutaway1: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_2_SUCCESS:
            return {
                ...state,
                notPutaway2: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_3_SUCCESS:
            return {
                ...state,
                notPutaway3: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_4_SUCCESS:
            return {
                ...state,
                notPutaway4: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_5_SUCCESS:
            return {
                ...state,
                notPutaway5: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_6_SUCCESS:
            return {
                ...state,
                notPutaway6: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_SUCCESS:
            return {
                ...state,
                notPutaway7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_OVER_7_SUCCESS:
            return {
                ...state,
                notPutawayOver7: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_TRANSITIONAL_0_SUCCESS:
            return {
                ...state,
                transitional0: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_1_SUCCESS:
            return {
                ...state,
                transitional1: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_2_SUCCESS:
            return {
                ...state,
                transitional2: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_3_SUCCESS:
            return {
                ...state,
                transitional3: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_4_SUCCESS:
            return {
                ...state,
                transitional4: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_5_SUCCESS:
            return {
                ...state,
                transitional5: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_6_SUCCESS:
            return {
                ...state,
                transitional6: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_7_SUCCESS:
            return {
                ...state,
                transitional7: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_OVER_7_SUCCESS:
            return {
                ...state,
                transitionalOver7: action.payload,
                error: null,
            };
        
        case ProgressPageActionTypes.FSC_TRANSITIONAL_TOTAL_SUCCESS:
            return {
                ...state,
                transitionalTotal: action.payload,
                error: null,
            };

        case ProgressPageActionTypes.FSC_LATEST_COUNT_DATA_SUCCESS:
            return {
                ...state,
                latestCountData: action.payload,
                error: null,
            };

        
        case ProgressPageActionTypes.FSC_OCCUPIED_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.FSC_OCCUPIED_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.FSC_EMPTY_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.FSC_EMPTY_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.FSC_EXPECTED_QTY_FAILURE:
        case ProgressPageActionTypes.FSC_VARIANCE_QTY_FAILURE:
        case ProgressPageActionTypes.FSC_UNIQUE_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.FSC_TOTAL_COUNTS_WITH_VARIANCE_FAILURE:
        case ProgressPageActionTypes.FSC_PR_FAILURE:
        case ProgressPageActionTypes.FSC_DMG_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_0_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_1_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_2_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_3_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_4_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_5_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_6_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_FAILURE:
        case ProgressPageActionTypes.FSC_NOT_PUTAWAY_OVER_7_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_0_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_1_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_2_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_3_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_4_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_5_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_6_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_7_FAILURE:
        case ProgressPageActionTypes.FSC_TRANSITONAL_OVER_7_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};

