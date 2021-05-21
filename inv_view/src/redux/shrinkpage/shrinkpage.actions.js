export const REQUEST_DAILY_SHRINK_DATA = "REQUEST_DAILY_SHRINK_DATA";
export const RECEIVE_DAILY_SHRINK_DATA = "RECEIVE_DAILY_SHRINK_DATA";

export const REQUEST_WEEKLY_SHRINK_DATA = "REQUEST_WEEKLY_SHRINK_DATA";
export const RECEIVE_WEEKLY_SHRINK_DATA = "RECEIVE_WEEKLY_SHRINK_DATA";

export const REQUEST_MONTHLY_SHRINK_DATA = "REQUEST_MONTHLY_SHRINK_DATA";
export const RECEIVE_MONTHLY_SHRINK_DATA = "RECEIVE_MONTHLY_SHRINK_DATA";

export const REQUEST_YEARLY_SHRINK_DATA = "REQUEST_YEARLY_SHRINK_DATA";
export const RECEIVE_YEARLY_SHRINK_DATA = "RECEIVE_YEARLY_SHRINK_DATA";

export const FSC_REQUEST_DAILY_SHRINK_DATA = "FSC_REQUEST_DAILY_SHRINK_DATA";
export const FSC_RECEIVE_DAILY_SHRINK_DATA = "FSC_RECEIVE_DAILY_SHRINK_DATA";

export const FSC_REQUEST_WEEKLY_SHRINK_DATA = "FSC_REQUEST_WEEKLY_SHRINK_DATA";
export const FSC_RECEIVE_WEEKLY_SHRINK_DATA = "FSC_RECEIVE_WEEKLY_SHRINK_DATA";

export const FSC_REQUEST_MONTHLY_SHRINK_DATA = "FSC_REQUEST_MONTHLY_SHRINK_DATA";
export const FSC_RECEIVE_MONTHLY_SHRINK_DATA = "FSC_RECEIVE_MONTHLY_SHRINK_DATA";

export const FSC_REQUEST_YEARLY_SHRINK_DATA = "FSC_REQUEST_YEARLY_SHRINK_DATA";
export const FSC_RECEIVE_YEARLY_SHRINK_DATA = "FSC_RECEIVE_YEARLY_SHRINK_DATA";



export const requestDailyShrinkData = () => ({
    type: REQUEST_DAILY_SHRINK_DATA
});
export const receiveDailyShrinkData = (dailyShrink) => ({
    type: RECEIVE_DAILY_SHRINK_DATA,  dailyShrink
})

export const requestWeeklyShrinkData = () => ({
    type: REQUEST_WEEKLY_SHRINK_DATA
});
export const receiveWeeklyShrinkData = (weeklyShrink) => ({
    type: RECEIVE_WEEKLY_SHRINK_DATA,  weeklyShrink
})

export const requestMonthlyShrinkData = () => ({
    type: REQUEST_MONTHLY_SHRINK_DATA
});
export const receiveMonthlyShrinkData = (monthlyShrink) => ({
    type: RECEIVE_MONTHLY_SHRINK_DATA,  monthlyShrink
})

export const requestYearlyShrinkData = () => ({
    type: REQUEST_YEARLY_SHRINK_DATA
});
export const receiveYearlyShrinkData = (yearlyShrink) => ({
    type: RECEIVE_YEARLY_SHRINK_DATA,  yearlyShrink
})


export const FSC_requestDailyShrinkData = () => ({
    type: FSC_REQUEST_DAILY_SHRINK_DATA
});
export const FSC_receiveDailyShrinkData = (dailyShrink) => ({
    type: FSC_RECEIVE_DAILY_SHRINK_DATA,  dailyShrink
})


export const FSC_requestWeeklyShrinkData = () => ({
    type: FSC_REQUEST_WEEKLY_SHRINK_DATA
});
export const FSC_receiveWeeklyShrinkData = (weeklyShrink) => ({
    type: FSC_RECEIVE_WEEKLY_SHRINK_DATA,  weeklyShrink
})


export const FSC_requestMonthlyShrinkData = () => ({
    type: FSC_REQUEST_MONTHLY_SHRINK_DATA
});
export const FSC_receiveMonthlyShrinkData = (monthlyShrink) => ({
    type: FSC_RECEIVE_MONTHLY_SHRINK_DATA,  monthlyShrink
})


export const FSC_requestYearlyShrinkData = () => ({
    type: FSC_REQUEST_YEARLY_SHRINK_DATA
});
export const FSC_receiveYearlyShrinkData = (yearlyShrink) => ({
    type: FSC_RECEIVE_YEARLY_SHRINK_DATA,  yearlyShrink
})

