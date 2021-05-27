import ShrinkPageActionTypes from './shrink-page.types';

const INITIAL_STATE = {
    dailyShrink:null,
    weeklyShrink:null,
    monthlyShrink:null,
    yearlyShrink:null,
    error:null,
};

export const CHG_shrinkData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                dailyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                weeklyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                monthlyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                yearlyShrink:action.payload,
                error:null,
            };

    
        case ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_FAILURE: 
        case ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_FAILURE:  
            return{
            ...state,
            error:action.payload,
            }       

        default:
            return state;
    }
};

export const FSC_shrinkData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                dailyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                weeklyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_MONTHLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                monthlyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                yearlyShrink:action.payload,
                error:null,
            };
    
        case ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.FSC_MONTHLY_SHRINK_DATA_FAILURE: 
        case ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_FAILURE:     
            return{
            ...state,
            error:action.payload,
            }       

        default:
            return state;
    }
};