import ShrinkPageActionTypes from './shrink-page.types';

const INITIAL_STATE = {
    CHG_dailyShrink:null,
    CHG_weeklyShrink:null,
    CHG_monthlyShrink:null,
    CHG_yearlyShrink:null,
    FSC_dailyShrink:null,
    FSC_weeklyShrink:null,
    FSC_monthlyShrink:null,
    FSC_yearlyShrink:null,
    error:null,
};

const shrinkData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                CHG_dailyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                CHG_weeklyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                CHG_monthlyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                CHG_yearlyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                FSC_dailyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                FSC_weeklyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_MONTHLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                FSC_monthlyShrink:action.payload,
                error:null,
            };

        case ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_SUCCESS:
            return {
                ...state, 
                FSC_yearlyShrink:action.payload,
                error:null,
            };
    
        case ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_FAILURE:
        case ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_FAILURE: 
        case ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_FAILURE: 
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

export default shrinkData;