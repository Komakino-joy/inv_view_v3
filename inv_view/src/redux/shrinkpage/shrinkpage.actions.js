import ShrinkPageActionTypes from './shrink-page.types';

export const CHG_requestDailyShrinkData = () => ({
    type: ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_START
});

export const CHG_receiveDailyShrinkData = (dailyShrink) => ({
    type: ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_SUCCESS,  
    payload: dailyShrink,
});

export const CHG_dailySrinkFailure = (error) => ({
    type: ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_FAILURE,
    payload: error, 
});


export const CHG_requestWeeklyShrinkData = () => ({
    type: ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_START
});

export const CHG_receiveWeeklyShrinkData = (weeklyShrink) => ({
    type: ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_SUCCESS,  
    payload: weeklyShrink
});

export const CHG_weeklyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_FAILURE,
    payload: error,
});


export const CHG_requestMonthlyShrinkData = () => ({
    type: ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_START
});

export const CHG_receiveMonthlyShrinkData = (monthlyShrink) => ({
    type: ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_SUCCESS,  
    payload: monthlyShrink,
});

export const CHG_monthlyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_FAILURE,
    payload: error,
});

export const CHG_requestYearlyShrinkData = () => ({
    type: ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_START
});

export const CHG_receiveYearlyShrinkData = (yearlyShrink) => ({
    type: ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_SUCCESS,  
    payload: yearlyShrink
});

export const CHG_yearlyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_FAILURE,
    payload: error,
});

export const FSC_requestDailyShrinkData = () => ({
    type: ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_START
});

export const FSC_receiveDailyShrinkData = (dailyShrink) => ({
    type: ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_SUCCESS,  
    payload: dailyShrink,
});

export const FSC_dailySrinkFailure = (error) => ({
    type: ShrinkPageActionTypes.FSC_DAILY_SHRINK_DATA_FAILURE,
    payload: error, 
});


export const FSC_requestWeeklyShrinkData = () => ({
    type: ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_START
});

export const FSC_receiveWeeklyShrinkData = (weeklyShrink) => ({
    type: ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_SUCCESS,  
    payload: weeklyShrink
});

export const FSC_weeklyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.FSC_WEEKLY_SHRINK_DATA_FAILURE,
    payload: error,
});


export const FSC_requestMonthlyShrinkData = () => ({
    type: ShrinkPageActionTypes.FSC_MONTHLY_SHRINK_DATA_START
});

export const FSC_receiveMonthlyShrinkData = (monthlyShrink) => ({
    type: ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_SUCCESS,  
    payload: monthlyShrink,
});

export const FSC_monthlyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.FSC_MONTHLY_SHRINK_DATA_FAILURE,
    payload: error,
});

export const FSC_requestYearlyShrinkData = () => ({
    type: ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_START
});

export const FSC_receiveYearlyShrinkData = (yearlyShrink) => ({
    type: ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_SUCCESS,  
    payload: yearlyShrink
});

export const FSC_yearlyShrinkDataFailure = (error) => ({
    type: ShrinkPageActionTypes.FSC_YEARLY_SHRINK_DATA_FAILURE,
    payload: error,
});
