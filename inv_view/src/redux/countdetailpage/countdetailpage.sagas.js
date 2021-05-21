import {call, put, takeLatest, all, takeEvery} from 'redux-saga/effects';

import CountDetailActionTypes from './countdetailpage.types';

import { 
    fetchDailyCount, 
    fetchUserCount, 
    fetchUserCountByDay,
    FSC_fetchDailyCount, 
    FSC_fetchUserCount, 
    FSC_fetchUserCountByDay,
     } from '../../api/api'

import { 
    receiveDailyCountData,
    receiveUserCountData,
    receiveUserCountByDay,
    FSC_receiveDailyCountData,
    FSC_receiveUserCountData,
    FSC_receiveUserCountByDay,
} from './countdetailpage.actions';


function* getDailyCount(){
    try{
        const dailyCount = yield fetchDailyCount();
        console.log('I have been breached', dailyCount)
        yield put(receiveDailyCountData(dailyCount))
    } catch (error) {
        yield put(receiveDailyCountData(error));
    }
};

function* getUserCount(userCountData){
    try{
        const userCount = yield call(fetchUserCount, userCountData)
        yield put(receiveUserCountData(userCount))
    } catch (error) {
        console.log(error);
    }
};

function* getUserCountByDay(userCountByDayData){
    try{
        const userCountByDay = yield call(fetchUserCountByDay, userCountByDayData)
        yield put(receiveUserCountByDay(userCountByDay))
    } catch (error) {
        console.log(error);
    }
};

function* FSC_getDailyCount(FSC_dailyCountData){
    try{
        const FSC_dailyCount = yield call(FSC_fetchDailyCount, FSC_dailyCountData)
        yield put(FSC_receiveDailyCountData(FSC_dailyCount))
    } catch (error) {
        console.log(error);
    }
};

function* FSC_getUserCount(FSC_userCountData){
    try{
        const FSC_userCount = yield call(FSC_fetchUserCount, FSC_userCountData)
        yield put(FSC_receiveUserCountData(FSC_userCount))
    } catch (error) {
        console.log(error);
    }
};

function* FSC_getUserCountByDay(FSC_userCountByDayData){
    try{
        const FSC_userCountByDay = yield call(FSC_fetchUserCountByDay, FSC_userCountByDayData)
        yield put(FSC_receiveUserCountByDay(FSC_userCountByDay))
    } catch (error) {
        console.log(error);
    }
};

export function* requestDailyCountSaga(){
    yield takeEvery(CountDetailActionTypes.REQUEST_DAILY_COUNT_DATA, getDailyCount)
}

export function* requestUserCountSaga(){
    yield takeLatest(CountDetailActionTypes.REQUEST_USER_COUNT_DATA, getUserCount)
}

export function* requestUserCountByDaySaga(){
    yield takeLatest(CountDetailActionTypes.REQUEST_USER_COUNT_BY_DAY_DATA, getUserCountByDay)
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
        call(requestDailyCountSaga),
        call(requestUserCountSaga),
        call(requestUserCountByDaySaga),
        call(FSC_requestDailyCountSaga),
        call(FSC_requestUserCountSaga),
        call(FSC_requestUserCountByDaySaga),
    ])
}