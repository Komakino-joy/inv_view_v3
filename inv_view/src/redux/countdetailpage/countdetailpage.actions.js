import CountDetailActionTypes from './countdetailpage.types';


export const requestDailyCountData = () => ({
    type: CountDetailActionTypes.REQUEST_DAILY_COUNT_DATA
});
export const receiveDailyCountData = (dailyCount) => ({
    type: CountDetailActionTypes.RECEIVE_DAILY_COUNT_DATA, 
    payload: dailyCount, 
});

export const dailyCountDataFailure = (error) => ({
    type: CountDetailActionTypes.DAILY_COUNT_DATA_FAILURE, 
    payload: error, 
});

export const requestUserCountData = () => ({
    type: CountDetailActionTypes.REQUEST_USER_COUNT_DATA
});
export const receiveUserCountData = (userCount) => ({
    type: CountDetailActionTypes.RECEIVE_USER_COUNT_DATA,  userCount
})

export const requestUserCountByDay = () => ({
    type: CountDetailActionTypes.REQUEST_USER_COUNT_BY_DAY_DATA
})
export const receiveUserCountByDay = (userCountByDay) => ({
    type: CountDetailActionTypes.RECEIVE_USER_COUNT_BY_DAY_DATA, userCountByDay
})


export const FSC_requestDailyCountData = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_DAILY_COUNT_DATA
});
export const FSC_receiveDailyCountData = (dailyCount) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_DAILY_COUNT_DATA,  dailyCount
})

export const FSC_requestUserCountData = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_USER_COUNT_DATA
});
export const FSC_receiveUserCountData = (userCount) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_DATA,  userCount
})

export const FSC_requestUserCountByDay = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_USER_COUNT_BY_DAY_DATA
})
export const FSC_receiveUserCountByDay = (userCountByDay) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_BY_DAY_DATA, userCountByDay
})