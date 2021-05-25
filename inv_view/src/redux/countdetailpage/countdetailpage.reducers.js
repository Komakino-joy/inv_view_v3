import CountDetailActionTypes  from './countdetailpage.types';

const INITIAL_STATE = {
    dailyCount : [],
    userCount: [],
    userCountByDay: [],
    error: null,
}

export const CHG_countData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CountDetailActionTypes.CHG_RECEIVE_DAILY_COUNT_DATA:
            return {
                ...state, 
                dailyCount : action.payload,
                error: null,
            }
        case CountDetailActionTypes.CHG_RECEIVE_USER_COUNT_DATA:
            return {
                ...state, 
                userCount: action.payload,
            }
        case CountDetailActionTypes.CHG_RECEIVE_USER_COUNT_BY_DAY_DATA:
            return {
                ...state, 
                userCountByDay: action.payload,
            }
        case CountDetailActionTypes.FSC_RECEIVE_DAILY_COUNT_DATA:
            return {
                ...state, 
                FSC_dailyCount : action.payload,
                error: null,
            }
        case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_DATA:
            return {
                ...state, 
                FSC_userCount: action.payload,
            }
        case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_BY_DAY_DATA:
            return {
                ...state, 
                FSC_userCountByDay: action.payload,
            }

        case CountDetailActionTypes.CHG_DAILY_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.CHG_USER_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.CHG_USER_COUNT_BY_DAY_DATA_FAILURE:
        case CountDetailActionTypes.FSC_DAILY_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.FSC_USER_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.FSC_USER_COUNT_BY_DAY_DATA_FAILURE:

            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};

export const FSC_countData = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CountDetailActionTypes.FSC_RECEIVE_DAILY_COUNT_DATA:
            return {
                ...state, 
                dailyCount : action.payload,
                error: null,
            }
        case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_DATA:
            return {
                ...state, 
                userCount: action.payload,
            }
        case CountDetailActionTypes.FSC_RECEIVE_USER_COUNT_BY_DAY_DATA:
            return {
                ...state, 
                userCountByDay: action.payload,
            }

        case CountDetailActionTypes.FSC_DAILY_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.FSC_USER_COUNT_DATA_FAILURE:
        case CountDetailActionTypes.FSC_USER_COUNT_BY_DAY_DATA_FAILURE:

            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};
