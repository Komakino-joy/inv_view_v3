import {call, put, takeLatest, all} from 'redux-saga/effects';

import CountDetailActionTypes from './countdetailpage.types';

import { 
    CHG_fetchDailyCount, 
    CHG_fetchUserCount, 
    CHG_fetchUserCountByDay,
    
    FSC_fetchDailyCount, 
    FSC_fetchUserCount, 
    FSC_fetchUserCountByDay,
     } from '../../api/api';

import { 
    CHG_receiveDailyCountData,
    CHG_receiveUserCountData,
    CHG_receiveUserCountByDay,
    CHG_dailyCountDataFailure,
    CHG_userCountDataFailure,
    CHG_userCountByDayFailure,

    FSC_receiveDailyCountData,
    FSC_receiveUserCountData,
    FSC_receiveUserCountByDay,
    FSC_dailyCountDataFailure,
    FSC_userCountDataFailure,
    FSC_userCountByDayFailure,
} from './countdetailpage.actions';


function* CHG_getDailyCount(){
    try{
        const dailyCount = yield CHG_fetchDailyCount();
        yield put(CHG_receiveDailyCountData(dailyCount));
    } catch (error) {
        yield put(CHG_dailyCountDataFailure(error));
    }
};

function* CHG_getUserCount(){
    try{
        const userCount = yield CHG_fetchUserCount();
        yield put(CHG_receiveUserCountData(userCount))
    } catch (error) {
        yield put(CHG_userCountDataFailure(error));
    }
};

function* CHG_getUserCountByDay(){
    try{
        const userCountByDay = yield CHG_fetchUserCountByDay();
        yield put(CHG_receiveUserCountByDay(userCountByDay));
    } catch (error) {
        yield put(CHG_userCountByDayFailure(error));
    }
};



function* FSC_getDailyCount(){
    try{
        const FSC_dailyCount = yield FSC_fetchDailyCount();
        yield put(FSC_receiveDailyCountData(FSC_dailyCount));
    } catch (error) {
        yield put(FSC_dailyCountDataFailure(error));
    };
};

function* FSC_getUserCount(){
    try{
        const FSC_userCount = yield FSC_fetchUserCount();
        yield put(FSC_receiveUserCountData(FSC_userCount));
    } catch (error) {
        yield put(FSC_userCountDataFailure(error));
    };
};

function* FSC_getUserCountByDay(){
    try{
        const FSC_userCountByDay = yield FSC_fetchUserCountByDay();
        yield put(FSC_receiveUserCountByDay(FSC_userCountByDay));
    } catch (error) {
        yield put(FSC_userCountByDayFailure(error));
    }
};

export function* CHG_requestDailyCountSaga(){
    yield takeLatest(CountDetailActionTypes.CHG_REQUEST_DAILY_COUNT_DATA, CHG_getDailyCount)
}

export function* CHG_requestUserCountSaga(){
    yield takeLatest(CountDetailActionTypes.CHG_REQUEST_USER_COUNT_DATA, CHG_getUserCount)
}

export function* CHG_requestUserCountByDaySaga(){
    yield takeLatest(CountDetailActionTypes.CHG_REQUEST_USER_COUNT_BY_DAY_DATA, CHG_getUserCountByDay)
}

export function* FSC_requestDailyCountSaga(){
    yield takeLatest(CountDetailActionTypes.FSC_REQUEST_DAILY_COUNT_DATA, FSC_getDailyCount)
}

export function* FSC_requestUserCountSaga(){
    yield takeLatest(CountDetailActionTypes.FSC_REQUEST_USER_COUNT_DATA, FSC_getUserCount)
}

export function* FSC_requestUserCountByDaySaga(){
    yield takeLatest(CountDetailActionTypes.FSC_REQUEST_USER_COUNT_BY_DAY_DATA, FSC_getUserCountByDay)
}

export function* countSagas(){
    yield all([
        call(CHG_requestDailyCountSaga),
        call(CHG_requestUserCountSaga),
        call(CHG_requestUserCountByDaySaga),
        call(FSC_requestDailyCountSaga),
        call(FSC_requestUserCountSaga),
        call(FSC_requestUserCountByDaySaga),
    ])
}