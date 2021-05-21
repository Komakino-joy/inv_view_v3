import {call, put, takeLatest, all} from 'redux-saga/effects';

import { 
    fetchDailyShrink, 
    fetchWeeklyShrink, 
    fetchMonthlyShrink, 
    fetchYearlyShrink,
    FSC_fetchDailyShrink,
    FSC_fetchWeeklyShrink,
    FSC_fetchMonthlyShrink,
    FSC_fetchYearlyShrink,
     } from '../../api/api'

import { 
    REQUEST_DAILY_SHRINK_DATA, 
    receiveDailyShrinkData,

    REQUEST_MONTHLY_SHRINK_DATA, 
    receiveMonthlyShrinkData,

    REQUEST_WEEKLY_SHRINK_DATA, 
    receiveWeeklyShrinkData,

    REQUEST_YEARLY_SHRINK_DATA, 
    receiveYearlyShrinkData,

    FSC_REQUEST_DAILY_SHRINK_DATA, 
    FSC_receiveDailyShrinkData,

    FSC_REQUEST_WEEKLY_SHRINK_DATA, 
    FSC_receiveWeeklyShrinkData,

    FSC_REQUEST_MONTHLY_SHRINK_DATA, 
    FSC_receiveMonthlyShrinkData,

    FSC_REQUEST_YEARLY_SHRINK_DATA, 
    FSC_receiveYearlyShrinkData,

} from './shrinkpage.actions';



function* getDailyShrink(dailyShrinkData){
    try{
        const dailyShrink = yield call(fetchDailyShrink, dailyShrinkData)
        yield put(receiveDailyShrinkData(dailyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* requestDailyShrinkSaga(){
    yield takeLatest(REQUEST_DAILY_SHRINK_DATA, getDailyShrink)
}

function* getWeeklyShrink(weeklyShrinkData){
    try{
        const weeklyShrink = yield call(fetchWeeklyShrink, weeklyShrinkData)
        yield put(receiveWeeklyShrinkData(weeklyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* requestWeeklyShrinkSaga(){
    yield takeLatest(REQUEST_WEEKLY_SHRINK_DATA, getWeeklyShrink)
}



function* getMonthlyShrink(monthlyShrinkData){
    try{
        const monthlyShrink = yield call(fetchMonthlyShrink, monthlyShrinkData)
        yield put(receiveMonthlyShrinkData(monthlyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* requestMonthlyShrinkSaga(){
    yield takeLatest(REQUEST_MONTHLY_SHRINK_DATA, getMonthlyShrink)
}



function* getYearlyShrink(yearlyShrinkData){
    try{
        const yearlyShrink = yield call(fetchYearlyShrink, yearlyShrinkData)
        yield put(receiveYearlyShrinkData(yearlyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* requestYearlyShrinkSaga(){
    yield takeLatest(REQUEST_YEARLY_SHRINK_DATA, getYearlyShrink)
}

function* FSC_getDailyShrink(FSC_dailyShrinkData){
    try{
        const FSC_dailyShrink = yield call(FSC_fetchDailyShrink, FSC_dailyShrinkData)
        yield put(FSC_receiveDailyShrinkData(FSC_dailyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* FSC_requestDailyShrinkSaga(){
    yield takeLatest(FSC_REQUEST_DAILY_SHRINK_DATA, FSC_getDailyShrink)
}

function* FSC_getWeeklyShrink(FSC_weeklyShrinkData){
    try{
        const FSC_weeklyShrink = yield call(FSC_fetchWeeklyShrink, FSC_weeklyShrinkData)
        yield put(FSC_receiveWeeklyShrinkData(FSC_weeklyShrink))
    } catch (error) {
        console.log(error);
    }
};
export function* FSC_requestWeeklyShrinkSaga(){
    yield takeLatest(FSC_REQUEST_WEEKLY_SHRINK_DATA, FSC_getWeeklyShrink)
}


function* FSC_getMonthlyShrink(FSC_monthlyShrinkData){
    try{
        const FSC_monthlyShrink = yield call(FSC_fetchMonthlyShrink, FSC_monthlyShrinkData)
        yield put(FSC_receiveMonthlyShrinkData(FSC_monthlyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* FSC_requestMonthlyShrinkSaga(){
    yield takeLatest(FSC_REQUEST_MONTHLY_SHRINK_DATA, FSC_getMonthlyShrink)
}


function* FSC_getYearlyShrink(FSC_yearlyShrinkData){
    try{
        const FSC_yearlyShrink = yield call(FSC_fetchYearlyShrink, FSC_yearlyShrinkData)
        yield put(FSC_receiveYearlyShrinkData(FSC_yearlyShrink))
    } catch (error) {
        console.log(error);
    }
};

export function* FSC_requestYearlyShrinkSaga(){
    yield takeLatest(FSC_REQUEST_YEARLY_SHRINK_DATA, FSC_getYearlyShrink)
}



export function* shrinkSagas(){
    yield all([
        call(requestDailyShrinkSaga),
        call(requestWeeklyShrinkSaga),
        call(requestMonthlyShrinkSaga),
        call(requestYearlyShrinkSaga),
        call(FSC_requestDailyShrinkSaga),
        call(FSC_requestWeeklyShrinkSaga),
        call(FSC_requestMonthlyShrinkSaga),
        call(FSC_requestYearlyShrinkSaga),
    ])
}