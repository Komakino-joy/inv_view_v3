import CountDetailActionTypes  from './countdetailpage.types';

const INITIAL_STATE = {
    dailyCount : [],
}


const countData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CountDetailActionTypes.RECEIVE_DAILY_COUNT_DATA:
            console.log('HELLLLLLLLLLLLOOOOOOOO',action.payload)
            return {
                ...state, 
                dailyCount : action.payload
            }
        // case CountDetailActionTypes.RECEIVE_USER_COUNT_DATA:
        //     return {...state, userCount}
        // case CountDetailActionTypes.RECEIVE_USER_COUNT_BY_DAY_DATA:
        //     return {...state, userCountByDay}
        // case CountDetailActionTypes.FSC_RECEIVE_DAILY_COUNT_DATA:
        //     return {...state, dailyCount}
        // case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_DATA:
        //     return {...state, userCount}
        // case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_BY_DAY_DATA:
        //     return {...state, userCountByDay}
        default:
            return state;
    }
};

export default countData;