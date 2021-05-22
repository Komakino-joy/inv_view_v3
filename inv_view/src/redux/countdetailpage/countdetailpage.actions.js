import CountDetailActionTypes from './countdetailpage.types';


export const CHG_requestDailyCountData = () => ({
    type: CountDetailActionTypes.CHG_REQUEST_DAILY_COUNT_DATA,
});
export const CHG_receiveDailyCountData = (dailyCount) => ({
    type: CountDetailActionTypes.CHG_RECEIVE_DAILY_COUNT_DATA, 
    payload: dailyCount, 
});

export const CHG_dailyCountDataFailure = (error) => ({
    type: CountDetailActionTypes.CHG_DAILY_COUNT_DATA_FAILURE, 
    payload: error, 
});




export const CHG_requestUserCountData = () => ({
    type: CountDetailActionTypes.CHG_REQUEST_USER_COUNT_DATA
});
export const CHG_receiveUserCountData = (userCount) => ({
    type: CountDetailActionTypes.CHG_RECEIVE_USER_COUNT_DATA,  
    payload: userCount,
});
export const CHG_userCountDataFailure = (error) => ({
    type: CountDetailActionTypes.CHG_USER_COUNT_DATA_FAILURE,  
    payload: error,
});



export const CHG_requestUserCountByDay = () => ({
    type: CountDetailActionTypes.CHG_REQUEST_USER_COUNT_BY_DAY_DATA
});
export const CHG_receiveUserCountByDay = (userCountByDay) => ({
    type: CountDetailActionTypes.CHG_RECEIVE_USER_COUNT_BY_DAY_DATA, 
    payload: userCountByDay,
});
export const CHG_userCountByDayFailure = (error) => ({
    type: CountDetailActionTypes.CHG_USER_COUNT_DATA_FAILURE,  
    payload: error,
});




export const FSC_requestDailyCountData = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_DAILY_COUNT_DATA,
});
export const FSC_receiveDailyCountData = (dailyCount) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_DAILY_COUNT_DATA,  
    payload: dailyCount,
});
export const FSC_dailyCountDataFailure = (error) => ({
    type: CountDetailActionTypes.FSC_DAILY_COUNT_DATA_FAILURE,  
    payload: error,
});



export const FSC_requestUserCountData = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_USER_COUNT_DATA
});
export const FSC_receiveUserCountData = (userCount) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_DATA,  
    payload: userCount,
});
export const FSC_userCountDataFailure = (error) => ({
    type: CountDetailActionTypes.FSC_USER_COUNT_DATA_FAILURE,  
    payload: error,
});



export const FSC_requestUserCountByDay = () => ({
    type: CountDetailActionTypes.FSC_REQUEST_USER_COUNT_BY_DAY_DATA
});
export const FSC_receiveUserCountByDay = (userCountByDay) => ({
    type: CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_BY_DAY_DATA, 
    payload: userCountByDay,
});
export const FSC_userCountByDayFailure = (error) => ({
    type: CountDetailActionTypes.FSC_USER_COUNT_BY_DAY_DATA_FAILURE, 
    payload: error,
});