import {call, put, takeLatest, all} from 'redux-saga/effects';

import ShrinkPageActionTypes from './shrink-page.types';

import { 
    CHG_API_URL,
    FSC_API_URL,
    httpFetchDailyShrink,
    httpFetchWeeklyShrink,
    httpFetchMonthlyShrink,
    httpFetchYearlyShrink,
     } from '../../api/api'

import { 
    CHG_receiveDailyShrinkData,
    CHG_receiveMonthlyShrinkData,
    CHG_receiveWeeklyShrinkData,
    CHG_receiveYearlyShrinkData,
    CHG_dailySrinkFailure,
    CHG_weeklyShrinkDataFailure,
    CHG_monthlyShrinkDataFailure,
    CHG_yearlyShrinkDataFailure,
    FSC_receiveDailyShrinkData,
    FSC_receiveMonthlyShrinkData,
    FSC_receiveWeeklyShrinkData,
    FSC_receiveYearlyShrinkData,
    FSC_dailySrinkFailure,
    FSC_weeklyShrinkDataFailure,
    FSC_monthlyShrinkDataFailure,
    FSC_yearlyShrinkDataFailure,

} from './shrinkpage.actions';



function* CHG_getDailyShrink(){
    try{
        const dailyShrink = yield httpFetchDailyShrink(`${CHG_API_URL}`);
        yield put(CHG_receiveDailyShrinkData(dailyShrink))
    } catch (error) {
        yield put(CHG_dailySrinkFailure(error));
    };
};

function* CHG_getWeeklyShrink(){
    try{
        const weeklyShrink = yield httpFetchWeeklyShrink(`${CHG_API_URL}`);
        yield put(CHG_receiveWeeklyShrinkData(weeklyShrink))
    } catch (error) {
        yield put(CHG_weeklyShrinkDataFailure(error));
    };
};

function* CHG_getMonthlyShrink(){
    try{
        const monthlyShrink = yield httpFetchMonthlyShrink(`${CHG_API_URL}`);
        yield put(CHG_receiveMonthlyShrinkData(monthlyShrink))
    } catch (error) {
        yield put(CHG_monthlyShrinkDataFailure(error));
    };
};

function* CHG_getYearlyShrink(){
    try{
        const yearlyShrink = yield httpFetchYearlyShrink(`${CHG_API_URL}`);
        yield put(CHG_receiveYearlyShrinkData(yearlyShrink))
    } catch (error) {
        yield put(CHG_yearlyShrinkDataFailure(error));
    };
};

function* FSC_getDailyShrink(){
    try{
        const dailyShrink = yield httpFetchDailyShrink(`${FSC_API_URL}`);
        yield put(FSC_receiveDailyShrinkData(dailyShrink))
    } catch (error) {
        yield put(FSC_dailySrinkFailure(error));
    };
};

function* FSC_getWeeklyShrink(){
    try{
        const weeklyShrink = yield httpFetchWeeklyShrink(`${FSC_API_URL}`);
        yield put(FSC_receiveWeeklyShrinkData(weeklyShrink))
    } catch (error) {
        yield put(FSC_weeklyShrinkDataFailure(error));
    };
};

function* FSC_getMonthlyShrink(){
    try{
        const monthlyShrink = yield httpFetchMonthlyShrink(`${FSC_API_URL}`);
        yield put(FSC_receiveMonthlyShrinkData(monthlyShrink))
    } catch (error) {
        yield put(FSC_monthlyShrinkDataFailure(error));
    };
};

function* FSC_getYearlyShrink(){
    try{
        const yearlyShrink = yield httpFetchYearlyShrink(`${FSC_API_URL}`);
        yield put(FSC_receiveYearlyShrinkData(yearlyShrink))
    } catch (error) {
        yield put(FSC_yearlyShrinkDataFailure(error));
    };
};

export function* CHG_requestDailyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.CHG_DAILY_SHRINK_DATA_START, CHG_getDailyShrink)
};

export function* CHG_requestWeeklyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.CHG_WEEKLY_SHRINK_DATA_START, CHG_getWeeklyShrink)
};

export function* CHG_requestMonthlyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.CHG_MONTHLY_SHRINK_DATA_START, CHG_getMonthlyShrink)
};

export function* CHG_requestYearlyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.CHG_YEARLY_SHRINK_DATA_START, CHG_getYearlyShrink)
};

export function* FSC_requestDailyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.FSC_REQUEST_DAILY_SHRINK_DATA, FSC_getDailyShrink)
};

export function* FSC_requestWeeklyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.FSC_REQUEST_WEEKLY_SHRINK_DATA, FSC_getWeeklyShrink)
};

export function* FSC_requestMonthlyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.FSC_REQUEST_MONTHLY_SHRINK_DATA, FSC_getMonthlyShrink)
};

export function* FSC_requestYearlyShrinkSaga(){
    yield takeLatest(ShrinkPageActionTypes.FSC_REQUEST_YEARLY_SHRINK_DATA, FSC_getYearlyShrink)
};



export function* shrinkSagas(){
    yield all([
        call(CHG_requestDailyShrinkSaga),
        call(CHG_requestWeeklyShrinkSaga),
        call(CHG_requestMonthlyShrinkSaga),
        call(CHG_requestYearlyShrinkSaga),
        call(FSC_requestDailyShrinkSaga),
        call(FSC_requestWeeklyShrinkSaga),
        call(FSC_requestMonthlyShrinkSaga),
        call(FSC_requestYearlyShrinkSaga),
    ])
}