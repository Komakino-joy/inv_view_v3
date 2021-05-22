import ProgressPageActionTypes  from './progress.page.types';

const INITIAL_STATE = {
    CHG_occupiedLocCounted : [],
    CHG_occupiedLocUnCounted: [],
    CHG_emptyLocCounted: [],
    CHG_emptyLocUncounted: [],
    CHG_expectedQty: [],
    CHG_varianceQty: [],
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

        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_FAILURE:
        case ProgressPageActionTypes.CHG_EXPECTED_QTY_FAILURE:
        case ProgressPageActionTypes.CHG_VARIANCE_QTY_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default progressData;